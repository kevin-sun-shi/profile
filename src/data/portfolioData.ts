import { ProjectItem, EducationItem, ExperienceItem, PublicationItem } from '../types';

export const PERSONAL_INFO = {
  nameEn: 'Shikaiwen Sun',
  nameZh: '孙施凯文',
  avatarUrl: '/assets/aistudio/3574_2a5653c6.JPG',
  cvPdfUrl: '/assets/aistudio/cv__2__f323ef11.pdf',
  currentRoleEn: 'Graduate Student in Music Technology @ NYU Steinhardt',
  currentRoleZh: '纽约大学音乐科技硕士在读 (NYU Steinhardt)',
  heroTaglineEn: 'Composer, Pianist & Music AI Researcher bridging complex rhythmic structures, generative models, and human-AI co-creation.',
  heroTaglineZh: '作曲家、钢琴演奏者与音乐 AI 研究者，致力于复杂节奏结构建模、生成式音乐模型及人机共创。',
  emails: {
    primary: 'sunshikaiwen@qq.com',
    secondary: 'sskevin1014@gmail.com',
  },
  socialLinks: {
    github: 'https://github.com/mxladicc25',
    googleScholar: 'https://scholar.google.com',
    portfolioLouvre: 'https://mxladicc25.github.io/',
    nyuLab: 'https://steinhardt.nyu.edu/programs/music-technology',
  },
  keyMetrics: [
    {
      labelEn: 'Current Status',
      labelZh: '当前状态',
      valueEn: 'NYU Music Tech',
      valueZh: '纽大音乐科技在读',
      subtextEn: 'Steinhardt M.M. Candidate',
      subtextZh: '硕士在读研究生',
    },
    {
      labelEn: 'Global Premiere',
      labelZh: '全球首演',
      valueEn: 'Louvre Abu Dhabi',
      valueZh: '阿布扎比卢浮宫',
      subtextEn: 'World’s 1st AI Full Score',
      subtextZh: '全球首个AI全生成交响/钢琴声部',
    },
    {
      labelEn: 'Scholarship',
      labelZh: '学术殊荣',
      valueEn: 'Global Talent',
      valueZh: '全球杰出人才奖学金',
      subtextEn: 'QMUL Sound & Music Computing',
      subtextZh: '伦敦玛丽女王大学声音与音乐计算',
    },
    {
      labelEn: 'Research Core',
      labelZh: '核心研究',
      valueEn: 'MIR & Polyrhythm',
      valueZh: '音乐检索与复节奏',
      subtextEn: 'Complex Rhythms & Transformers',
      subtextZh: 'Transformer生成与人本评估',
    },
  ],
};

export const ABOUT_CONTENT = {
  introEn: `I am a composer, pianist, and researcher working at the vibrant frontier where advanced computational machine learning meets the rigor of contemporary and jazz composition. Currently pursuing my graduate studies in Music Technology at New York University (NYU Steinhardt), I focus on rhythmic complexity modeling, transformer-based symbolic music generation, and human-centered evaluation frameworks for AI-generated music.`,
  introZh: `我是一名活跃在计算机机器学习与严肃现代/爵士作曲交叉领域的作曲家、钢琴家与研究者。现于纽约大学（NYU Steinhardt）攻读音乐科技（Music Technology）硕士学位，核心研究聚焦于复杂节奏结构建模、基于 Transformer 的符号化音乐生成以及以人为本的 AI 音乐评价范式。`,
  
  paragraph2En: `My artistic foundation originates from rigorous conservatory training at Nanjing University of the Arts in Composition and Computer Composition Theory, complemented by an analytical thesis deciphering Nikolai Kapustin's fusion of classical structures with virtuosic jazz improvisation. In 2024–2025, I served as the Lead Composer for 'Dreamscape at the Louvre Abu Dhabi'—the world's first AI fully generated music score, co-created with artificial intelligence scientists from MBZUAI and Music X Lab, supported by G42.`,
  paragraph2Zh: `我的音乐创作底蕴根植于南京艺术学院电子音乐作曲专业系统的古典与现代作曲技法训练，本科毕业论文深入解析了尼古拉·卡普斯汀（Kapustin）八首音乐会练习曲中古典曲式与精湛爵士即兴语汇的交融。2024–2025 年，我作为主创作曲家（Lead Composer）深度主导了阿布扎比卢浮宫展演项目《Dreamscape》，与 MBZUAI 及 Music X Lab 团队科学家紧密合作，打造了全球首部由 AI 全程生成声部的交响/钢琴共创作品，获 G42 科技集团支持。`,
  
  paragraph3En: `My computational research explores how generative neural networks can understand deep musical syntax beyond simple pitch sequences: modeling hierarchical meter, syncopation entropy, polymeter inspired by Pat Metheny and György Ligeti, and building multimodal benchmarks such as the Classical Music + Reviews (CMPD) dataset. I actively participate in Prof. Simon Dixon's Jazz Research Group at Queen Mary University of London and maintain close research collaboration with Prof. Gus Xia's Music X Lab.`,
  paragraph3Zh: `在计算与信息检索维度，我探究生成式神经网络如何跨越单纯的音高预测，深刻理解音乐的深层句法：对分层节拍、切分熵、源于 Pat Metheny 与 Ligeti 的复节奏（Polymeter）进行数学与特征建模，并主持研发了融合古典乐谱/音频与权威乐评文本的跨模态数据集 CMPD。我亦参与伦敦玛丽女王大学 Prof. Simon Dixon 爵士研究组，并与 Prof. Gus Xia 的 Music X Lab 保持长期学术共创。`,

  disciplines: [
    {
      titleEn: 'Music Information Retrieval (MIR)',
      titleZh: '音乐信息检索 (MIR)',
      descEn: 'Audio signal processing, beat tracking, rhythmic complexity quantification, and feature alignment with Librosa, Madmom, and PS2M.',
      descZh: '利用 Librosa、Madmom 及 PS2M 进行音频信号处理、节拍追踪、节奏复杂度量化及跨模态特征对齐。',
    },
    {
      titleEn: 'Transformer & VAE Music Generation',
      titleZh: 'Transformer & VAE 音乐生成',
      descEn: 'Designing inductive priors for symbolic music generation, controllable groove generation, and interactive Human-AI co-composition workflows.',
      descZh: '为符号化音乐模型设计归纳偏置，实现可控律动生成与自适应人机共创交互工作流。',
    },
    {
      titleEn: 'Acoustic Composition & Jazz Idioms',
      titleZh: '学术作曲与爵士语汇',
      descEn: 'Orchestration for Western & Chinese orchestra, Kapustin-style jazz counterpoint, contemporary aleatoric structures, and spectral timbre exploration.',
      descZh: '交响管弦乐配器（中西管弦乐）、卡普斯汀式爵士对位、偶然音乐（Cage）与频谱声响探索（Grisey）。',
    },
    {
      titleEn: 'Human-Centered Evaluation',
      titleZh: '人本导向的音乐评测',
      descEn: 'Reproducible research environments, expert listening studies, and cognitive evaluation protocols for computational creativity.',
      descZh: '可复现研究环境搭建、专家级听觉实验设计以及面向计算创造力的认知评估范式。',
    },
  ],
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'dreamscape-louvre',
    title: 'Dreamscape at the Louvre Abu Dhabi',
    titleZh: '阿布扎比卢浮宫《Dreamscape》AI交响与自鸣钢琴共创',
    category: 'ai-music',
    categoryLabelEn: 'AI Co-Creation',
    categoryLabelZh: '人机共创音乐',
    roleEn: 'Lead Composer & Music AI Collaborator',
    roleZh: '主创作曲家 / 音乐 AI 算法协作',
    year: '2024 – 2025',
    organization: 'G42 · MBZUAI · Music X Lab',
    summaryEn: "World's first AI fully generated music score, premiered with US pianist Dr. Gabriel Shao on a Yamaha Disklavier interactive piano at the iconic Louvre Abu Dhabi.",
    summaryZh: '全球首部全程由 AI 算法生成的完整音乐作品，携手美国青年钢琴家 Dr. Gabriel Shao 在阿布扎比卢浮宫通过雅马哈自鸣钢琴进行人机交互全球首演。',
    descriptionEn: `Dreamscape represents a milestone in computational musicology and artistic performance. Serving as Lead Composer in close dialogue with AI scientists from Music X Lab (MBZUAI) and G42, I guided generative neural architectures to synthesize structured symphonic and solo piano gestures that respect complex harmonic progression, emotional arc, and idiomatic pianism. The final work was performed by US pianist Dr. Gabriel Shao in direct interaction with a self-playing Yamaha Disklavier, proving a real-world human-AI co-creation pipeline.`,
    descriptionZh: `《Dreamscape》是计算音乐学与艺术表演领域的里程碑式实践。作为主创作曲家，我与来自 MBZUAI Music X Lab 及 G42 的顶尖科学家开展深层次跨学科协作，引导生成式模型在遵循精密和声逻辑与戏剧张力的同时，生成极富钢琴语汇特征的声部。作品最终由知名钢琴家 Dr. Gabriel Shao 与雅马哈 Disklavier 自鸣钢琴进行人机互动画卷首演，展示了前沿生成模型与现场严肃演奏的无缝耦合。`,
    tags: ['AI Music Generation', 'Disklavier Interactive Piano', 'Transformers', 'Human-in-the-Loop', 'Symphonic AI Score'],
    externalUrl: 'https://mxladicc25.github.io/',
    externalUrlLabelEn: 'Louvre Abu Dhabi Portfolio & Recordings',
    externalUrlLabelZh: '访问作品展示与现场录音页面',
    collaboratorsEn: 'Dr. Gus Xia (Executive Creative Director), Dr. Gabriel Shao (Pianist), Music X Lab Scientists',
    collaboratorsZh: '夏光宇博士（执行创意总监）、Dr. Gabriel Shao（首演钢琴家）、Music X Lab 科学家团队',
    outcomesEn: [
      'Engineered a complete human-AI co-creation workflow from prompt conditioning to Disklavier MIDI execution.',
      'World premiere at the iconic Louvre Abu Dhabi architectural auditorium.',
      'Demonstrated high stylistic fidelity in multi-voice counterpoint and responsive live dynamics.',
    ],
    outcomesZh: [
      '构建了从算法提示引导到 Disklavier 物理钢琴击弦 MIDI 控制的全流程共创管线。',
      '在阿布扎比卢浮宫建筑殿堂完成全球首次公开落地展演。',
      '在复调多声部对位与现场动态响应上展现了极高的艺术表现力与技术逼真度。',
    ],
    codeSnippet: {
      filename: 'disklavier_midi_stream.py',
      language: 'python',
      code: `# Human-AI Co-Creation: Disklavier MIDI Velocity & Timing Alignment
import mido
import numpy as np

def calibrate_disklavier_dynamics(midi_events, dynamic_curve='grand_piano'):
    """
    Map AI-generated velocity tensors to Yamaha Disklavier solenoid response curves.
    Ensures natural acoustic hammer articulation without mechanical clipping.
    """
    calibrated_track = mido.MidiTrack()
    for msg in midi_events:
        if msg.type == 'note_on' and msg.velocity > 0:
            # Acoustic mechanical velocity compensation
            adjusted_vel = int(np.power(msg.velocity / 127.0, 1.25) * 118 + 8)
            calibrated_track.append(msg.copy(velocity=adjusted_vel))
        else:
            calibrated_track.append(msg)
    return calibrated_track`,
    },
  },
  {
    id: 'cmpd-dataset',
    title: 'CMPD: Classical Music + Critical Reviews Dual-Modal Dataset',
    titleZh: 'CMPD: 古典音乐与权威乐评双模态对齐数据集',
    category: 'mir-data',
    categoryLabelEn: 'MIR & Dataset',
    categoryLabelZh: '音乐信息检索与数据集',
    roleEn: 'Co-Developer & Computational Musicologist',
    roleZh: '联合开发者 / 计算音乐学架构',
    year: '2024 – Ongoing',
    organization: 'Music AI Research Group',
    summaryEn: 'A pioneering multimodal dataset pairing historical and contemporary classical recordings with multi-paragraph professional critical reviews for machine learning alignment.',
    summaryZh: '开拓性的双模态学术数据集，将权威古典演奏录音/乐谱与多段落专业乐评、美学评论深度对齐，赋能跨模态音乐理解与多维度模型评测。',
    descriptionEn: `Current Music Information Retrieval and text-to-music systems suffer from superficial text descriptions that fail to capture nuances of interpretation, tempo rubato, acoustic timbre, and expressive phrasing. CMPD bridges this critical gap by curating thousands of expert critical reviews paired with high-quality classical performances. The dataset includes fine-grained structural alignments, audio feature tensors (Librosa, Madmom, spectral flux), and semantic embeddings designed for zero-shot retrieval and critical evaluation.`,
    descriptionZh: `当前音乐信息检索（MIR）与跨模态生成系统往往受限于表面化、浅层的文本标签，无法刻画弹性节拍（Rubato）、音色质感与细腻乐句呼吸。CMPD 项目通过系统收集与对齐数千篇权威音乐评论与高质量经典演奏录音，提取多维音频特征张量（Librosa、Madmom、频谱通量）与深层语义表征，为跨模态对比学习、多维度解释性生成与无监督检索奠定基准。`,
    tags: ['Multimodal Alignment', 'Librosa', 'Madmom', 'Dataset Engineering', 'Audio-Text Representation', 'PyTorch'],
    externalUrl: 'https://github.com/mxladicc25',
    externalUrlLabelEn: 'Dataset Benchmark Repo & Documentation',
    externalUrlLabelZh: '查看数据集基准仓库与开发文档',
    collaboratorsEn: 'Computational Musicologists & NLP Researchers',
    collaboratorsZh: '计算音乐学家与跨模态自然语言处理研究团队',
    outcomesEn: [
      'Constructed hierarchical text-audio alignment strategies for multi-movement symphonic works.',
      'Paper report in preparation: dual-modal alignment, metric entropy, and qualitative evaluation.',
      'Open-source evaluation scripts ensuring full reproducibility across research groups.',
    ],
    outcomesZh: [
      '针对多乐章交响作品构建了分层时序对齐策略与跨模态注意力表征。',
      '论文报告筹备中：涵盖双模态跨域对齐度量、切分熵与专家主观感知评价。',
      '打造开放可复现的评测工具链，助力国际学术界无缝验证。',
    ],
    codeSnippet: {
      filename: 'audio_review_alignment.py',
      language: 'python',
      code: `import librosa
import numpy as np

def extract_interpretive_features(audio_path, sr=22050):
    """
    Extract expressive tempo rubato and spectral balance features
    to align with musical criticism semantics (e.g. 'crystalline touch', 'sluggish rubato').
    """
    y, _ = librosa.load(audio_path, sr=sr)
    tempo, beat_frames = librosa.beat.beat_track(y=y, sr=sr)
    onset_env = librosa.onset.onset_strength(y=y, sr=sr)
    spec_contrast = librosa.feature.spectral_contrast(y=y, sr=sr)
    
    # Calculate tempo instability (expressive rubato measure)
    beat_times = librosa.frames_to_time(beat_frames, sr=sr)
    ibis = np.diff(beat_times) # inter-beat intervals
    rubato_entropy = float(np.std(ibis) / (np.mean(ibis) + 1e-6))
    
    return {
        "mean_tempo": float(tempo),
        "rubato_entropy": rubato_entropy,
        "spectral_contrast_mean": spec_contrast.mean(axis=1).tolist()
    }`,
    },
  },
  {
    id: 'rhythmic-complexity-modeling',
    title: 'Hierarchical Rhythmic Complexity & Transformer Generation',
    titleZh: '分层节奏复杂度建模与 Transformer 音乐生成',
    category: 'ai-music',
    categoryLabelEn: 'AI & MIR Research',
    categoryLabelZh: '人工智能与音乐检索',
    roleEn: 'Primary Researcher',
    roleZh: '主要研究者',
    year: '2023 – 2025',
    organization: 'Independent & Academic Research Group',
    summaryEn: 'Algorithmic quantification of metric syncopation, polymeter, and rhythm entropy to guide symbolic music generation with deep jazz and contemporary idioms.',
    summaryZh: '对复节奏（Polymeter）、非对称节拍切分度与度量熵进行算法化量化，为符号化生成模型植入兼具严谨性与现代爵士律动的结构归纳偏置。',
    descriptionEn: `While modern generative AI models excel at generating harmonic progressions, they frequently produce rhythmically monotonous or structurally degenerate sequences. Drawing upon contemporary compositional paradigms (Pat Metheny's 11/8 and 7/4 meters, György Ligeti's micropolyphony) and quantitative MIR metrics, this project investigates metric hierarchy matrices and syncopation entropy as conditioning vectors in Transformer/VAE architectures.`,
    descriptionZh: `当前生成式模型虽能合成流畅和声，却常在节拍韵律上陷入单调或结构退化。借鉴现代当代作曲技法（如 Pat Metheny 经典曲目《The First Circle》的复合节拍结构，以及 Ligeti 的微复调构架），该研究提出度量分层矩阵与切分熵作为 Transformer 及 VAE 架构的条件控制向量，赋能复杂非对称节拍的高保真生成。`,
    tags: ['Rhythmic Complexity', 'Polymeter Modeling', 'VAE', 'Transformer Architecture', 'Symbolic Music AI'],
    externalUrl: 'https://github.com/mxladicc25',
    externalUrlLabelEn: 'Explore Research Code & Notebooks',
    externalUrlLabelZh: '查阅研究代码与分析 Notebook',
    collaboratorsEn: 'Mentored by Prof. Gus Xia & Prof. Simon Dixon Jazz Group',
    collaboratorsZh: '受 Prof. Gus Xia 及 Prof. Simon Dixon 爵士研究组学术启发与指导',
    outcomesEn: [
      'Formulated mathematical metrics capturing Longuet-Higgins and Fitch syncopation index.',
      'Constructed a specialized corpus of polyrhythmic and metric-modulation MIDI tracks.',
      'Validated significant improvement in groove diversity through blind listening evaluations.',
    ],
    outcomesZh: [
      '实现了对经典 Longuet-Higgins / Fitch 切分指标的多层级数学建模扩展。',
      '清洗构建了涵盖复节拍与调性度量调制（Metric Modulation）的专项 MIDI 训练语料。',
      '双盲主观听觉评测证实模型在律动多样性与节拍张力控制上取得显著提升。',
    ],
    codeSnippet: {
      filename: 'syncopation_entropy.py',
      language: 'python',
      code: `import numpy as np

def compute_metric_syncopation_entropy(grid_events, meter_weights):
    """
    Computes hierarchical syncopation index based on metric weight decay.
    Notes occurring on weak beats followed by silences on strong beats
    generate proportional metric tension vectors.
    """
    tension = 0.0
    for idx, (has_onset, weight) in enumerate(zip(grid_events, meter_weights)):
        if has_onset and weight < 0:
            # Check for silent strong beat anticipation
            next_weight = meter_weights[(idx + 1) % len(meter_weights)]
            if next_weight > 0 and not grid_events[(idx + 1) % len(grid_events)]:
                tension += abs(next_weight - weight)
    return float(tension)`,
    },
  },
  {
    id: 'kapustin-analytical-study',
    title: "Analytical Study of Kapustin's Eight Concert Etudes (Op. 40)",
    titleZh: '卡普斯汀《八首音乐会练习曲》(Op. 40) 曲式与爵士风格机理研究',
    category: 'composition',
    categoryLabelEn: 'Academic Thesis',
    categoryLabelZh: '学术学位论文',
    roleEn: 'Solo Author & Analyst',
    roleZh: '独立作者 / 音乐学分析',
    year: '2021 – 2022',
    organization: 'Nanjing University of the Arts',
    summaryEn: 'Comprehensive theoretical and structural monograph dissecting Nikolai Kapustin’s virtuoso synthesis of classical formal logic (sonata, toccata) with post-bop jazz idioms.',
    summaryZh: '系统性深度专著与毕业论文，剖析作曲家兼钢琴家卡普斯汀如何将严谨古典曲式（奏鸣曲、托卡塔）与博普爵士（Bop）即兴语汇进行高度统一的艺术熔炼。',
    descriptionEn: `Nikolai Kapustin stands as one of the most enigmatic figures in 20th-century music, notating spontaneous jazz improvisation within strict classical forms. This analytical thesis investigates the structural geometry of his Eight Concert Etudes (Op. 40), dissecting how syncopated jazz swing, blues scale alterations, and polyrhythmic counterpoint are governed by classicist sonata-allegro and perpetual-motion toccata frameworks. This research provides the musicological foundation for my ongoing computational modeling of jazz complexity.`,
    descriptionZh: `尼古拉·卡普斯汀是二十世纪最具独特魅力的作曲家之一，他以极为严密的古典记谱定格了自由挥洒的爵士即兴神髓。该毕业专著深入剖析其代表作《八首音乐会练习曲》（Op. 40），逐首拆解其如何运用切分摇摆、蓝调变音与复节奏对位，统一在奏鸣曲快板及常动托卡塔的理性骨架之中，为后续关于爵士节奏复杂度的计算建模奠定了深厚的美学与曲式基石。`,
    tags: ['Kapustin Op. 40', 'Musicology', 'Jazz Counterpoint', 'Formal Analysis', 'Piano Virtuosity'],
    externalUrl: 'https://github.com/mxladicc25',
    externalUrlLabelEn: 'Read Thesis Abstract & Overview',
    externalUrlLabelZh: '查看论文摘要与曲式图表',
    collaboratorsEn: 'Supervised at Nanjing University of the Arts Composition Department',
    collaboratorsZh: '南京艺术学院音乐学院作曲系导师指导',
    outcomesEn: [
      'Graduated with honors; undergraduate thesis awarded outstanding academic recognition.',
      'Detailed harmonic and syncopation catalogs cited in subsequent algorithmic studies.',
      'Informed current research on AI modeling of hybrid classical-jazz genres.',
    ],
    outcomesZh: [
      '获南艺优秀毕业论文荣誉，答辩获专家评审一致高分肯定。',
      '建立系统和声与节奏特征谱系，直接转化为后续算法研究的先验参考。',
      '为多流派混合生成模型提供了高阶音乐理论先验。',
    ],
  },
  {
    id: 'contemporary-spectral-aleatoric',
    title: 'Contemporary Chamber, Aleatoric & Spectral Compositions',
    titleZh: '现代室内乐、偶然音乐与频谱作曲创作系列',
    category: 'composition',
    categoryLabelEn: 'Original Composition',
    categoryLabelZh: '严肃原创作品',
    roleEn: 'Composer & Electroacoustic Artist',
    roleZh: '作曲家 / 电子原声艺术创作者',
    year: '2019 – 2024',
    organization: 'NUA & Independent Projects',
    summaryEn: 'Original acoustic and electroacoustic repertoire exploring Grisey’s spectral timbre morphing, John Cage’s indeterminacy, and Ligeti’s micropolyphonic sound blocks.',
    summaryZh: '探索热拉尔·格里塞（Grisey）频谱音色变形、约翰·凯奇（Cage）易经偶然机理与利盖蒂（Ligeti）微复调音块质感的系列室内乐与管弦乐原创作品。',
    descriptionEn: `A collection of original compositions and acoustic orchestrations that explore the boundary between organic acoustic instruments and algorithmic process. Influenced by Grisey's 'Partiels', John Cage's 'Music of Changes', and Ligeti's 'Musica ricercata' / 'Lux Aeterna', these works employ layered rhythmic phase shifts, pitch-class sequence permutations, and microtonal overtone acoustics for both Western and Chinese national orchestras.`,
    descriptionZh: `融合传统声学管弦乐器与算法结构规则的一系列严肃音乐创作。受格里塞《Partiels》、约翰·凯奇《变化之书》以及利盖蒂《Musica ricercata》和《Lux Aeterna》启发，作品广泛运用分层节拍相位转移、音级集合序列置换以及泛音微音程频谱声效，涵盖中西管弦交响乐队与现代室内乐组合。`,
    tags: ['Spectralism', 'Aleatoric Music', 'Orchestration', 'Ligeti Micropolyphony', 'Electroacoustic'],
    collaboratorsEn: 'Western Symphony Orchestra & Chinese National Orchestra performers',
    collaboratorsZh: '交响乐团演奏家与现代室内乐演奏团体',
    outcomesEn: [
      'Completed comprehensive orchestration coursework for Western and Chinese traditional instruments.',
      'Integrated acoustic overtone series analysis into algorithmic synth sound design.',
      'Featured in university new music showcases and masterclass demonstrations.',
    ],
    outcomesZh: [
      '系统完成了涵盖中西管弦乐全编制的配器总谱工程。',
      '将真实乐器泛音列实测分析融入合成器声学算法设计。',
      '入选高等艺术院校现代音乐研讨会与大师班现场交流展演。',
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'Master of Music (M.M.) in Music Technology',
    degreeZh: '音乐科技硕士研究生 (Master of Music)',
    institution: 'New York University (NYU Steinhardt)',
    institutionZh: '纽约大学 (New York University · Steinhardt)',
    period: 'Current Graduate Student',
    statusEn: 'Currently Enrolled Graduate Student',
    statusZh: '现阶段全日制在读硕士研究生',
    locationEn: 'New York, NY, USA',
    locationZh: '美国 · 纽约',
    highlightsEn: [
      'Concentration in audio signal processing, computational musicology, interactive systems, and machine learning for audio.',
      'Collaborating with world-class faculty and researchers at the cutting edge of modern sound technology and spatial audio.',
    ],
    highlightsZh: [
      '主修方向涵盖音频数字信号处理、计算音乐学、交互式智能音频系统与机器学习音频建模。',
      '与纽约大学音乐科技前沿实验室科研人员及学者开展深入学术交流与前瞻课题研发。',
    ],
  },
  {
    degree: 'MSc in Sound and Music Computing',
    degreeZh: '声音与音乐计算理学硕士 (Offer Received & Deferred for Direct PhD)',
    institution: 'Queen Mary University of London (QMUL)',
    institutionZh: '伦敦玛丽女王大学 (QMUL)',
    period: 'Admitted 2025 (Deferred)',
    statusEn: 'Global Talent Scholarship Recipient',
    statusZh: '全额/高额全球杰出人才奖学金获得者',
    locationEn: 'London, United Kingdom',
    locationZh: '英国 · 伦敦',
    honorsEn: 'Awarded the prestigious QMUL Global Talent Scholarship',
    honorsZh: '荣获极具含金量的 QMUL 全球杰出人才奖学金 (Global Talent Scholarship)',
    highlightsEn: [
      'Offer received for world-leading Centre for Digital Music (C4DM) curriculum.',
      'Offer strategically deferred while actively participating in research groups and preparing direct PhD applications in Music AI / MIR.',
      'Enrolled in Prof. Simon Dixon’s renowned Jazz Research Group from September 2025.',
    ],
    highlightsZh: [
      '获世界顶级数字音乐中心（C4DM）录取资格与奖学金认可。',
      '为专注直接攻读 Music AI / MIR 领域顶尖博士学位项目，战略性申请延期入学。',
      '于 2025 年 9 月正式加入国际知名音乐信息检索学者 Prof. Simon Dixon 教授主持的爵士科研团队。',
    ],
  },
  {
    degree: 'Bachelor of Arts (B.A.) in Composition & Computer Composition Theory',
    degreeZh: '作曲与作曲技术理论（电子音乐作曲/计算机作曲）文学学士',
    institution: 'Nanjing University of the Arts (NUA)',
    institutionZh: '南京艺术学院 (Nanjing University of the Arts)',
    period: '2018 – 2022',
    statusEn: 'Graduated with Academic Honors',
    statusZh: '优秀本科毕业生',
    locationEn: 'Nanjing, China',
    locationZh: '中国 · 南京',
    honorsEn: 'Outstanding Student Scholarship (2018–2019) & Annual Excellence Awards',
    honorsZh: '荣获 2018–2019 年度优秀学生奖学金及学院多项学术荣誉',
    highlightsEn: [
      'Rigorous conservatory coursework: Harmony, Polyphony, Musical Forms, Orchestration (Western & Chinese Orchestra), Digital Audio Production.',
      'Undergraduate Thesis: Analytical Study of Kapustin’s Eight Concert Etudes (Op. 40) focusing on formal balance and jazz idioms.',
    ],
    highlightsZh: [
      '系统受训核心专业课程：传统和声学、复调对位法、大型曲式学、交响配器（中西双轨）、数字录音与电子音乐制作。',
      '撰写优秀本科毕业论文《卡普斯汀八首音乐会练习曲的分析研究》，深研曲式架构与即兴演奏语汇。',
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'Lead Composer & Music AI Collaborator',
    roleZh: '主创作曲家与音乐 AI 合作者',
    organization: 'Louvre Abu Dhabi AI Exhibition Project',
    organizationZh: '阿布扎比卢浮宫生成式 AI 展演项目',
    period: '2024 – 2025',
    mentorEn: 'Dr. Gus Xia (Executive Creative Director) & Dr. Gabriel Shao (Pianist)',
    mentorZh: '夏光宇博士（执行创意总监）与 Dr. Gabriel Shao（首演钢琴家）',
    descEn: "Served as Lead Composer for 'Dreamscape', the world's first AI fully generated music score, supported by tech conglomerate G42 and Mohamed bin Zayed University of Artificial Intelligence (MBZUAI).",
    descZh: '担任《Dreamscape》主创作曲家，主导全球首个全流程 AI 生成乐谱工程，获得阿联酋顶尖科技集团 G42 与穆罕默德·本·扎耶德人工智能大学（MBZUAI）全力支持。',
    achievementsEn: [
      'Designed prompting conditioning and human-in-the-loop aesthetic curation pipeline for neural music generators.',
      'Premiered in live performance with Yamaha Disklavier self-playing acoustic grand piano and live soloist Dr. Gabriel Shao.',
      'Authored comprehensive project portfolio and methodology archive at mxladicc25.github.io.',
    ],
    achievementsZh: [
      '构建提示词控制与专家级“人机回路（Human-in-the-loop）”美学筛选评测管线。',
      '于阿布扎比卢浮宫完成雅马哈 Disklavier 自鸣三角钢琴与现场独奏家的人机交互全球首演。',
      '归纳总结完整工程范式与作品展示，归档于 mxladicc25.github.io。',
    ],
    url: 'https://mxladicc25.github.io/',
  },
  {
    role: 'Guest Member & Masterclass Collaborator',
    roleZh: '客座成员与大师班科研协作',
    organization: "Prof. Gus Xia's Music X Lab Masterclasses",
    organizationZh: '夏光宇教授（Music X Lab）前沿学术大师班',
    period: 'May–June 2023 & June–July 2024',
    mentorEn: 'Prof. Gus Xia (Associate Professor of Machine Learning, MBZUAI)',
    mentorZh: '夏光宇教授（MBZUAI 机器学习副教授，卡内基梅隆大学 CMU 博士）',
    descEn: 'Collaborated intensively with PhD students and visiting researchers from NYU and MBZUAI on intelligent music systems, interactive composition agents, and machine learning for computer music.',
    descZh: '在两期高强度学术研修中，与来自纽约大学（NYU）和 MBZUAI 的博士生团队紧密协作，探索智能音乐系统、交互式作曲代理（Agent）与音频机器学习。',
    achievementsEn: [
      'Engaged in hands-on model evaluation, codebase replication, and reproducible research validation.',
      'Bridged conservatory compositional theory with neural representations and latent space music manipulation.',
    ],
    achievementsZh: [
      '深度参与前沿生成模型复现评测、可复现学术实验验证与代码管线打磨。',
      '将专业严肃作曲理论深度融合至神经网络隐空间（Latent Space）音乐表征与交互操控之中。',
    ],
  },
  {
    role: 'Jazz Research Group Participant',
    roleZh: '爵士音乐计算科研组成员',
    organization: 'Centre for Digital Music (C4DM), Queen Mary University of London',
    organizationZh: '伦敦玛丽女王大学数字音乐中心 (C4DM)',
    period: 'Sept 2025 – Present',
    mentorEn: 'Prof. Simon Dixon',
    mentorZh: 'Prof. Simon Dixon（国际数字音乐与爵士计算领军学者）',
    descEn: 'Engaged in Prof. Simon Dixon’s specialized jazz research collective, investigating computational analysis of jazz swing, expressive microtiming, and improvisational hierarchy.',
    descZh: '参与 Prof. Simon Dixon 主持的爵士音乐计算前沿研究小组，聚焦爵士摇摆感（Swing）、微时序表情（Microtiming）及即兴结构层级计算。',
    achievementsEn: [
      'Investigating computational jazz improvisation transcription and syncopation modeling.',
      'Participating in academic seminars on MIR and symbolic rhythm representation.',
    ],
    achievementsZh: [
      '开展爵士即兴演奏自动转录算法与切分微时序建模研究。',
      '常态化参与顶尖 MIR 研讨班，拓展高维符号节拍表征的学术前沿。',
    ],
  },
];

export const PUBLICATIONS: PublicationItem[] = [
  {
    id: 'pub-cmpd',
    title: 'CMPD: A Dual-Modal Dataset and Benchmark for Classical Music Interpretation and Review Alignment',
    titleZh: 'CMPD：面向古典音乐诠释与乐评对齐的双模态数据集与基准评测报告',
    authorsEn: 'Shikaiwen Sun, et al.',
    authorsZh: '孙施凯文 等',
    venueEn: 'In Preparation / Under Review for Music AI & MIR Venue',
    venueZh: '论文撰写与期刊/会议投稿筹备中（目标 MIR / Music AI 顶级会议）',
    year: '2025',
    statusEn: 'In Preparation (Preprint Forthcoming)',
    statusZh: '筹备中（即将发布预印本与开源代码库）',
    abstractEn: 'Presents a curated dual-modal benchmark coupling high-fidelity classical audio recordings with multi-paragraph critical performance reviews. Evaluates cross-modal retrieval, expressive feature alignment (rubato, timbre, dynamics), and human-centered evaluation metrics.',
    abstractZh: '提出并发布了将高保真古典录音与多段落权威专业乐评深度耦合的双模态基准数据集。系统评测了跨模态对齐检索、表现力特征量化（弹性节拍、音色、力度）与以人为本的专家评价指标体系。',
    bibtex: `@article{sun2025cmpd,
  title={CMPD: A Dual-Modal Dataset and Benchmark for Classical Music Interpretation and Review Alignment},
  author={Sun, Shikaiwen and Collaborators},
  journal={arXiv preprint in preparation},
  year={2025}
}`,
    pdfUrl: '/assets/aistudio/cv__2__f323ef11.pdf',
  },
  {
    id: 'pub-kapustin',
    title: "Analytical Study of Nikolai Kapustin's Eight Concert Etudes (Op. 40): The Convergence of Classicist Architecture and Post-Bop Idioms",
    titleZh: '尼古拉·卡普斯汀《八首音乐会练习曲》(Op. 40) 的曲式逻辑与博普爵士语汇融合研究',
    authorsEn: 'Shikaiwen Sun (Advisor: Prof. NUA Composition Faculty)',
    authorsZh: '孙施凯文（导师：南京艺术学院作曲系导师组）',
    venueEn: 'Nanjing University of the Arts Academic Monograph Series',
    venueZh: '南京艺术学院学术专著与优秀毕业论文选编',
    year: '2022',
    statusEn: 'Defended with Distinction / University Outstanding Thesis',
    statusZh: '答辩获评优秀毕业论文 / 学院卓越学术典藏',
    abstractEn: 'An exhaustive musicological and structural analysis of Kapustin’s Op. 40 etudes, systematically formalizing the harmonic syntax, syncopated polyrhythms, and formal toccata structures that define modern classical-jazz synthesis.',
    abstractZh: '针对卡普斯汀 Op. 40 进行详尽的音乐学与曲式机理拆解，形式化总结了定义现代“古典-爵士”跨界巅峰的和声句法、复节拍切分特征与托卡塔结构形态。',
    bibtex: `@thesis{sun2022kapustin,
  title={Analytical Study of Nikolai Kapustin's Eight Concert Etudes (Op. 40)},
  author={Sun, Shikaiwen},
  school={Nanjing University of the Arts},
  year={2022},
  type={Undergraduate Honors Thesis}
}`,
  },
];

export const TECHNICAL_SKILLS = [
  {
    categoryEn: 'Music Composition & Performance',
    categoryZh: '严肃作曲与钢琴演奏',
    items: [
      { name: 'Classical Composition & Analysis', detailEn: 'Sonata form, counterpoint, polyphony, Schenkerian fundamentals', detailZh: '奏鸣曲式、复调对位、申克尔曲式骨架' },
      { name: 'Piano Performance', detailEn: 'Classical virtuosity, Kapustin etudes, jazz harmonic voicing', detailZh: '古典精湛技巧、卡普斯汀练习曲、爵士和弦配置' },
      { name: 'Orchestration & Scoring', detailEn: 'Western symphony orchestra & Chinese traditional orchestra', detailZh: '西方交响乐配器与中国民族管弦乐配器全谱' },
      { name: 'Contemporary & Spectral Idioms', detailEn: 'Aleatoric music (Cage), Spectralism (Grisey), Micropolyphony (Ligeti)', detailZh: '偶然音乐（凯奇）、频谱音乐（格里塞）、微复调（利盖蒂）' },
    ],
  },
  {
    categoryEn: 'Machine Learning & MIR',
    categoryZh: '机器学习与音乐信息检索',
    items: [
      { name: 'Python & Audio Libraries', detailEn: 'Librosa, Madmom, NumPy, SciPy, PS2M, PyTorch', detailZh: '深度使用 Librosa, Madmom, NumPy, SciPy, PS2M, PyTorch' },
      { name: 'Generative Architectures', detailEn: 'Transformer symbolic generation, VAE, metric conditioning priors', detailZh: 'Transformer 符号化音乐生成、VAE 潜空间、节拍先验' },
      { name: 'Multimodal Datasets & Benchmarks', detailEn: 'Audio-text alignment, cross-modal retrieval, metric entropy', detailZh: '跨模态音文对齐、特征度量熵、基准检索评测' },
      { name: 'Reproducible Research', detailEn: 'Environment containerization, code replication, evaluation suites', detailZh: '可复现实验构建、代码库复现验证、自动化测试套件' },
    ],
  },
  {
    categoryEn: 'Digital Audio & Hardware',
    categoryZh: '数字音频与硬件控制',
    items: [
      { name: 'Digital Audio Workstations', detailEn: 'Logic Pro, Ableton Live, Pro Tools, Max/MSP fundamentals', detailZh: '精通 Logic Pro, Ableton Live, Pro Tools 及 Max/MSP' },
      { name: 'Acoustic-Midi Actuation', detailEn: 'Yamaha Disklavier solenoid calibration, velocity curve mapping', detailZh: '雅马哈 Disklavier 自鸣钢琴螺线管校准与击弦力度映射' },
      { name: 'Audio Signal Processing', detailEn: 'FFT analysis, spectral flux, chroma vectors, rhythmograms', detailZh: '快速傅里叶变换 FFT、频谱通量、色度矢量、节奏图谱分析' },
      { name: 'Recording & Mastering', detailEn: 'Multi-microphone stereo techniques, orchestral acoustic capture', detailZh: '立体声录音制式配置、大型交响声场高动态拾音与母带' },
    ],
  },
];
