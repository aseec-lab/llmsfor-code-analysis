# llmsfor-code-analysis
## Introduction
This is the online appendix for our paper [Large Language Models for Code Analysis: Do LLMs Really Do Their Job?](https://arxiv.org/abs/2310.12357).
## Data
![General Structure](images/FigAnalysisDiagram.jpg)

The dataset we use consists of:
- Non-Obfuscated Code
1. C: Selected code sample from POJ-104 dataset and classic C benchmarks (Linpack, etc.);
2. JavaScript: The Octane benchmark and some web apps from Github;
3. Python: Selected code samples from Google CodeSearchNet dataset;
- Obfuscated Code
1. Obfuscated JavaScript code (obtained by applying different obfuscation tchniques to the JavaScript branch of our Non-Obfuscated Code dataset);
2. Winner code of Internet Obfuscated C Code Contest (IOCCC);
## Results
<!-- ![Overall histogram regarding LoC statistics of our non-obfuscated source code dataset](images/FigCodeHist.jpg) -->
Results of our analysis include responses of different models on different code sample.
<!-- ## Case Studies
![Android Case Study](images/FigAndroidDiagram.jpg)
![WannaCry Case Study](images/FigWannaCry.jpg) -->
## Citation
```
@inproceedings{fang2024large,
  title={Large language models for code analysis: Do llms really do their job?},
  author={Fang, Chongzhou and Miao, Ning and Srivastav, Shaurya and Liu, Jialin and Zhang, Ruoyu and Fang, Ruijie and Asmita and Tsang, Ryan and Nazari, Najmeh and Wang, Han and Homayoun, Houman},
  booktitle={Usenix Security Symposium},
  year={2024}
};

```
