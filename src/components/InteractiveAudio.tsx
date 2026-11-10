import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, Sliders, Music, Sparkles, RefreshCw } from 'lucide-react';
import { Language } from '../types';

interface InteractiveAudioProps {
  lang: Language;
}

interface RhythmPreset {
  nameEn: string;
  nameZh: string;
  ratio: [number, number];
  noteName: string;
  theoryEn: string;
  theoryZh: string;
  scaleNotes: number[]; // MIDI note numbers
}

const PRESETS: RhythmPreset[] = [
  {
    nameEn: '4:3 Kapustin Counterpoint',
    nameZh: '4:3 卡普斯汀对位律动',
    ratio: [4, 3],
    noteName: 'C Minor Blues (C4, Eb4, F4, F#4, G4, Bb4)',
    theoryEn: 'Classic jazz-classical cross-rhythm foundational to Kapustin’s Op. 40 concert toccatas.',
    theoryZh: '卡普斯汀 Op. 40 练习曲中连接古典对位与摇摆爵士的核心交错节奏。',
    scaleNotes: [60, 63, 65, 66, 67, 70, 72],
  },
  {
    nameEn: '5:4 Asymmetric Polymeter',
    nameZh: '5:4 非对称复节奏 (Pat Metheny)',
    ratio: [5, 4],
    noteName: 'Lydian Dominant (C4, D4, E4, F#4, G4, A4, Bb4)',
    theoryEn: 'Used extensively in modern jazz composition to generate metric tension without destabilizing the groove.',
    theoryZh: '现代爵士中产生高阶律动张力同时保持推进感的不对称复节拍结构。',
    scaleNotes: [60, 62, 64, 66, 67, 69, 70, 72],
  },
  {
    nameEn: '7:4 Complex Syncopation',
    nameZh: '7:4 复合切分律动',
    ratio: [7, 4],
    noteName: 'Dorian b2 Modal (C4, Db4, Eb4, F4, G4, A4, Bb4)',
    theoryEn: 'Hierarchical syncopation benchmark tested in my rhythm entropy modeling for generative transformers.',
    theoryZh: '在 Transformer 生成模型中用以测试分层切分熵极限的复合微时序测试基准。',
    scaleNotes: [60, 61, 63, 65, 67, 69, 70, 72],
  },
  {
    nameEn: '3:2 Traditional Hemiola',
    nameZh: '3:2 传统半拍二重 (Hemiola)',
    ratio: [3, 2],
    noteName: 'Major Pentatonic (C4, D4, E4, G4, A4, C5)',
    theoryEn: 'Baroque formal metric modulation reinterpreted through modal jazz voicings.',
    theoryZh: '巴洛克古典变节拍（Hemiola）在现代调式爵士和弦配置下的重新解构。',
    scaleNotes: [60, 62, 64, 67, 69, 72, 74],
  },
];

export const InteractiveAudio: React.FC<InteractiveAudioProps> = ({ lang }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState(112);
  const [activePresetIndex, setActivePresetIndex] = useState(0);
  const [volume, setVolume] = useState(0.65);
  const [currentBeatA, setCurrentBeatA] = useState(0);
  const [currentBeatB, setCurrentBeatB] = useState(0);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const schedulerTimerRef = useRef<number | null>(null);
  const nextNoteTimeRef = useRef<number>(0);
  const stepCountRef = useRef<number>(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameRef = useRef<number | null>(null);

  const currentPreset = PRESETS[activePresetIndex];

  // Initialize Web Audio
  const initAudio = () => {
    if (!audioCtxRef.current) {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtxClass();
      const masterGain = ctx.createGain();
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 128;
      analyser.smoothingTimeConstant = 0.85;

      masterGain.gain.setValueAtTime(volume, ctx.currentTime);
      masterGain.connect(analyser);
      analyser.connect(ctx.destination);

      audioCtxRef.current = ctx;
      masterGainRef.current = masterGain;
      analyserRef.current = analyser;
    }

    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
  };

  // Convert MIDI note to Frequency
  const mtof = (note: number) => 440 * Math.pow(2, (note - 69) / 12);

  // Play a synthesized acoustic marimba / electric bell note
  const triggerTone = (freq: number, time: number, isAccent = false, isLayerB = false) => {
    if (!audioCtxRef.current || !masterGainRef.current) return;
    const ctx = audioCtxRef.current;

    // Oscillator 1 (fundamental)
    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();

    // Oscillator 2 (harmonic overtone for idiomatic piano/marimba texture)
    const oscHarmonic = ctx.createOscillator();
    const harmGain = ctx.createGain();

    if (isLayerB) {
      // Warm jazz sub-timbre
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq * 0.5, time);
      oscHarmonic.type = 'sine';
      oscHarmonic.frequency.setValueAtTime(freq * 1.5, time);
    } else {
      // Bright Kapustin acoustic chime
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, time);
      oscHarmonic.type = 'triangle';
      oscHarmonic.frequency.setValueAtTime(freq * 2.0, time);
    }

    const peak = (isAccent ? 0.35 : 0.22) * (isLayerB ? 0.8 : 1.0);
    const duration = isLayerB ? 0.45 : 0.28;

    oscGain.gain.setValueAtTime(0, time);
    oscGain.gain.linearRampToValueAtTime(peak, time + 0.005);
    oscGain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    harmGain.gain.setValueAtTime(0, time);
    harmGain.gain.linearRampToValueAtTime(peak * 0.4, time + 0.008);
    harmGain.gain.exponentialRampToValueAtTime(0.0001, time + duration * 0.6);

    osc.connect(oscGain);
    oscGain.connect(masterGainRef.current);
    oscHarmonic.connect(harmGain);
    harmGain.connect(masterGainRef.current);

    osc.start(time);
    osc.stop(time + duration + 0.05);
    oscHarmonic.start(time);
    oscHarmonic.stop(time + duration + 0.05);
  };

  // Trigger snappy transient click
  const triggerWoodblock = (time: number, isHigh: boolean) => {
    if (!audioCtxRef.current || !masterGainRef.current) return;
    const ctx = audioCtxRef.current;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(isHigh ? 880 : 440, time);
    osc.frequency.exponentialRampToValueAtTime(isHigh ? 220 : 110, time + 0.04);

    gain.gain.setValueAtTime(0.2, time);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.05);

    osc.connect(gain);
    gain.connect(masterGainRef.current);

    osc.start(time);
    osc.stop(time + 0.06);
  };

  // Precision lookahead audio scheduler
  useEffect(() => {
    if (!isPlaying) {
      if (schedulerTimerRef.current) {
        window.clearInterval(schedulerTimerRef.current);
        schedulerTimerRef.current = null;
      }
      return;
    }

    initAudio();
    const ctx = audioCtxRef.current!;
    nextNoteTimeRef.current = ctx.currentTime + 0.05;
    stepCountRef.current = 0;

    const [voiceA, voiceB] = currentPreset.ratio;
    // LCM of the ratio gives the common subdivision per measure
    const cycleSubdivisions = voiceA * voiceB;
    const measureDurationSec = (60 / bpm) * 4; // 1 whole measure in 4/4 equivalent

    const schedule = () => {
      const scheduleAheadTime = 0.15; // Schedule 150ms ahead
      while (nextNoteTimeRef.current < ctx.currentTime + scheduleAheadTime) {
        const step = stepCountRef.current;
        const subIndex = step % cycleSubdivisions;

        // Check if Voice A fires
        const intervalA = cycleSubdivisions / voiceA;
        if (subIndex % intervalA === 0) {
          const beatIndexA = Math.floor(subIndex / intervalA);
          const noteIndex = beatIndexA % currentPreset.scaleNotes.length;
          const midi = currentPreset.scaleNotes[noteIndex];
          triggerTone(mtof(midi), nextNoteTimeRef.current, beatIndexA === 0, false);
          triggerWoodblock(nextNoteTimeRef.current, true);

          // Update visual beat state synchronously with Web Audio clock
          const delayMs = Math.max(0, (nextNoteTimeRef.current - ctx.currentTime) * 1000);
          setTimeout(() => setCurrentBeatA(beatIndexA), delayMs);
        }

        // Check if Voice B fires
        const intervalB = cycleSubdivisions / voiceB;
        if (subIndex % intervalB === 0) {
          const beatIndexB = Math.floor(subIndex / intervalB);
          const noteIndex = (currentPreset.scaleNotes.length - 1 - beatIndexB + currentPreset.scaleNotes.length) % currentPreset.scaleNotes.length;
          const midi = currentPreset.scaleNotes[noteIndex] - 12; // An octave lower
          triggerTone(mtof(midi), nextNoteTimeRef.current, beatIndexB === 0, true);
          triggerWoodblock(nextNoteTimeRef.current, false);

          const delayMs = Math.max(0, (nextNoteTimeRef.current - ctx.currentTime) * 1000);
          setTimeout(() => setCurrentBeatB(beatIndexB), delayMs);
        }

        // Advance step
        const stepDuration = measureDurationSec / cycleSubdivisions;
        nextNoteTimeRef.current += stepDuration;
        stepCountRef.current++;
      }
    };

    schedulerTimerRef.current = window.setInterval(schedule, 25);

    return () => {
      if (schedulerTimerRef.current) {
        clearInterval(schedulerTimerRef.current);
        schedulerTimerRef.current = null;
      }
    };
  }, [isPlaying, bpm, activePresetIndex]);

  // Adjust volume
  useEffect(() => {
    if (masterGainRef.current && audioCtxRef.current) {
      masterGainRef.current.gain.setTargetAtTime(volume, audioCtxRef.current.currentTime, 0.05);
    }
  }, [volume]);

  // Canvas visualizer (Dual orbital rhythm wheels & real-time audio spectrum)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let running = true;

    const render = () => {
      if (!running) return;

      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      // Background subtle grid
      ctx.fillStyle = '#0b0c13';
      ctx.fillRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const [voiceA, voiceB] = currentPreset.ratio;

      // 1. Draw Spectrum in bottom background if analyser active
      if (analyserRef.current && isPlaying) {
        const bufferLength = analyserRef.current.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        analyserRef.current.getByteFrequencyData(dataArray);

        ctx.beginPath();
        const barWidth = width / (bufferLength * 0.7);
        for (let i = 0; i < bufferLength * 0.7; i++) {
          const barHeight = (dataArray[i] / 255) * (height * 0.35);
          const x = i * barWidth;
          const y = height - barHeight;

          const gradient = ctx.createLinearGradient(0, height, 0, y);
          gradient.addColorStop(0, 'rgba(99, 102, 241, 0.0)');
          gradient.addColorStop(1, 'rgba(129, 140, 248, 0.25)');

          ctx.fillStyle = gradient;
          ctx.fillRect(x, y, barWidth - 1, barHeight);
        }
      }

      // 2. Outer Ring: Voice A
      const outerRadius = Math.min(width, height) * 0.36;
      ctx.beginPath();
      ctx.arc(centerX, centerY, outerRadius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.25)';
      ctx.lineWidth = 2;
      ctx.stroke();

      for (let i = 0; i < voiceA; i++) {
        const angle = (i / voiceA) * Math.PI * 2 - Math.PI / 2;
        const x = centerX + Math.cos(angle) * outerRadius;
        const y = centerY + Math.sin(angle) * outerRadius;
        const isActive = isPlaying && currentBeatA === i;

        ctx.beginPath();
        ctx.arc(x, y, isActive ? 9 : 5, 0, Math.PI * 2);
        ctx.fillStyle = isActive ? '#a5b4fc' : '#4f46e5';
        if (isActive) {
          ctx.shadowColor = '#818cf8';
          ctx.shadowBlur = 14;
        } else {
          ctx.shadowBlur = 0;
        }
        ctx.fill();

        // Label
        ctx.fillStyle = 'rgba(226, 232, 240, 0.7)';
        ctx.font = '10px monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`A${i + 1}`, x + Math.cos(angle) * 16, y + Math.sin(angle) * 16);
      }

      // 3. Inner Ring: Voice B
      const innerRadius = Math.min(width, height) * 0.23;
      ctx.beginPath();
      ctx.arc(centerX, centerY, innerRadius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(20, 184, 166, 0.25)';
      ctx.lineWidth = 2;
      ctx.stroke();

      for (let j = 0; j < voiceB; j++) {
        const angle = (j / voiceB) * Math.PI * 2 - Math.PI / 2;
        const x = centerX + Math.cos(angle) * innerRadius;
        const y = centerY + Math.sin(angle) * innerRadius;
        const isActive = isPlaying && currentBeatB === j;

        ctx.beginPath();
        ctx.arc(x, y, isActive ? 9 : 5, 0, Math.PI * 2);
        ctx.fillStyle = isActive ? '#5eead4' : '#0d9488';
        if (isActive) {
          ctx.shadowColor = '#2dd4bf';
          ctx.shadowBlur = 14;
        } else {
          ctx.shadowBlur = 0;
        }
        ctx.fill();

        ctx.fillStyle = 'rgba(226, 232, 240, 0.7)';
        ctx.font = '10px monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`B${j + 1}`, x + Math.cos(angle) * 15, y + Math.sin(angle) * 15);
      }

      // Center Core
      ctx.shadowBlur = 0;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 28, 0, Math.PI * 2);
      ctx.fillStyle = '#131522';
      ctx.fill();
      ctx.strokeStyle = isPlaying ? '#6366f1' : '#272a38';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.fillStyle = isPlaying ? '#e0e7ff' : '#94a3b8';
      ctx.font = 'bold 12px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${voiceA}:${voiceB}`, centerX, centerY - 4);

      ctx.font = '9px sans-serif';
      ctx.fillStyle = '#64748b';
      ctx.fillText(isPlaying ? `${bpm} BPM` : 'STANDBY', centerX, centerY + 10);

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      running = false;
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [currentPreset, currentBeatA, currentBeatB, isPlaying, bpm]);

  const togglePlay = () => {
    initAudio();
    setIsPlaying((prev) => !prev);
  };

  return (
    <section id="interactive-audio" className="py-20 border-t border-slate-800/80 bg-[#08090d] relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 mb-2">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>{lang === 'en' ? 'INTERACTIVE RESEARCH BENCHMARK' : '交互式科研探针'}</span>
              <span aria-hidden="true">·</span>
              <span>Web Audio API</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-['Outfit']">
              {lang === 'en' ? 'Polyrhythmic Complexity Synthesizer' : '复节奏复杂度与度量微时序合成器'}
            </h2>
            <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
              {lang === 'en'
                ? 'An interactive demonstration of complex meter and syncopation modeling—bridging Nikolai Kapustin’s jazz-classical counterpoint with algorithmic conditioning priors for generative music transformers.'
                : '探索非对称复节拍、切分熵与微时序特征的在线交互引擎——连接卡普斯汀式爵士对位技法与基于 Transformer 的生成式音乐先验建模。'}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-200 cursor-pointer shadow-lg whitespace-nowrap ${
                isPlaying
                  ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-500/20'
                  : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/25'
              }`}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
              <span>
                {isPlaying
                  ? lang === 'en'
                    ? 'Pause Polyrhythm'
                    : '暂停音频'
                  : lang === 'en'
                    ? 'Audition Polyrhythm'
                    : '试听复节拍'}
              </span>
            </button>
          </div>
        </div>

        {/* Visualizer & Controls Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Canvas Display */}
          <div className="lg:col-span-7 bg-[#0c0d16] border border-slate-800/90 rounded-2xl p-6 flex flex-col justify-between shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800/60 mb-2">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <Music className="w-3.5 h-3.5 text-indigo-400" />
                <span>{currentPreset.noteName}</span>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono">
                <span className="flex items-center gap-1.5 text-indigo-300">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 inline-block" />
                  Voice A ({currentPreset.ratio[0]})
                </span>
                <span className="flex items-center gap-1.5 text-teal-300">
                  <span className="w-2 h-2 rounded-full bg-teal-500 inline-block" />
                  Voice B ({currentPreset.ratio[1]})
                </span>
              </div>
            </div>

            <div className="relative w-full aspect-[4/3] max-h-[380px] flex items-center justify-center my-auto">
              <canvas
                ref={canvasRef}
                width={560}
                height={400}
                className="w-full h-full object-contain rounded-xl"
              />
            </div>

            <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>{lang === 'en' ? 'Real-Time Spectrum + Euclidean Orbital Wheel' : '实时 FFT 频谱与欧几里得轨道轮'}</span>
              <span>{isPlaying ? `${bpm} BPM · ACTIVE` : 'ENGINE IDLE'}</span>
            </div>
          </div>

          {/* Right Parameters & Presets */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Presets List */}
            <div className="bg-[#0c0d16] border border-slate-800/90 rounded-2xl p-6">
              <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Sliders className="w-3.5 h-3.5 text-indigo-400" />
                {lang === 'en' ? 'Select Rhythmic Structure' : '选择复节拍与对位结构'}
              </h3>

              <div className="space-y-2.5">
                {PRESETS.map((preset, idx) => {
                  const active = activePresetIndex === idx;
                  return (
                    <button
                      key={preset.nameEn}
                      onClick={() => {
                        setActivePresetIndex(idx);
                        initAudio();
                      }}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                        active
                          ? 'bg-indigo-950/40 border-indigo-500/60 text-white shadow-sm'
                          : 'bg-[#10121d] border-slate-800/70 text-slate-300 hover:border-slate-700 hover:bg-[#131624]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold">
                          {lang === 'en' ? preset.nameEn : preset.nameZh}
                        </span>
                        <span className="font-mono text-xs text-indigo-400 bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-800/50">
                          {preset.ratio[0]}:{preset.ratio[1]}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                        {lang === 'en' ? preset.theoryEn : preset.theoryZh}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Slider Controls */}
            <div className="bg-[#0c0d16] border border-slate-800/90 rounded-2xl p-6 space-y-5">
              <div>
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-slate-300 flex items-center gap-1.5">
                    <RefreshCw className="w-3.5 h-3.5 text-indigo-400" />
                    {lang === 'en' ? 'Tempo / Metric Pulse' : '速度控制 (BPM)'}
                  </span>
                  <span className="text-indigo-400 font-bold tabular-nums">{bpm} BPM</span>
                </div>
                <input
                  type="range"
                  min="60"
                  max="180"
                  value={bpm}
                  onChange={(e) => setBpm(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-slate-300 flex items-center gap-1.5">
                    <Volume2 className="w-3.5 h-3.5 text-indigo-400" />
                    {lang === 'en' ? 'Synthesizer Volume' : '合成器主音量'}
                  </span>
                  <span className="text-indigo-400 font-bold tabular-nums">
                    {Math.round(volume * 100)}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
              </div>

              <div className="text-[11px] text-slate-400 leading-relaxed pt-2 border-t border-slate-800/50">
                <span className="text-slate-300 font-medium">
                  {lang === 'en' ? 'Research Connection:' : '学术研究关联：'}
                </span>{' '}
                {lang === 'en'
                  ? 'This engine quantifies how human listeners perceive metric tension when two rational pulses interlock, providing key priors for symbolic AI music generation.'
                  : '此模块直观呈现两组有理数节拍交织时的人耳微时序张力感知，为符号化 AI 音乐生成提供可量化的结构先验。'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
