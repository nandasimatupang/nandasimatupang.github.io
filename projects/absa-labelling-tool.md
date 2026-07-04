## The Problem

Building an ABSA model requires labelled training data where each aspect term and its sentiment are manually annotated. Doing this by hand in a spreadsheet is slow, error-prone, and hard to keep consistent across annotators. I needed a dedicated tool to make this faster and more reliable.

## What It Does

- Load and display text documents one at a time for annotation
- Highlight and tag aspect terms within the text
- Assign sentiment polarity to each tagged aspect
- Export the annotated dataset in a structured format for model training

## What I Learned

Building my own tooling made me appreciate how much of real-world machine learning is data preparation, not modeling. Designing a tool that's actually pleasant to use forced me to think about the annotator's workflow — a perspective that carries over into how I approach data quality in any ML project.
