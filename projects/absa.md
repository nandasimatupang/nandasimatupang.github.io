## The Problem

Standard sentiment analysis tells you whether a review is positive or negative overall. But a single review often mentions multiple things — a product's battery life might be praised while its screen is criticized. Aspect-Based Sentiment Analysis (ABSA) solves this by identifying each aspect in the text and classifying the sentiment toward each one separately.

## Approach

I used a BERT-based model to tackle this as a sequence labeling task. The pipeline breaks down into: tokenizing the input text, identifying aspect terms, and predicting the sentiment polarity (positive, negative, neutral) for each aspect.

- Data preprocessing: cleaning and tokenizing review datasets
- Fine-tuning BERT for aspect-term extraction and sentiment classification
- Evaluation using accuracy and F1-score metrics
- this is fucking great i can just edit this page

## What I Learned

This project deepened my understanding of transformer architectures and how to fine-tune pre-trained models for a specific NLP task. I also gained experience handling imbalanced sentiment labels and structuring an end-to-end ML pipeline.

![description](images/image_messi.jpeg)
