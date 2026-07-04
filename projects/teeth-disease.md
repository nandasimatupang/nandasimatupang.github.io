## The Problem

Early detection of dental diseases can improve treatment outcomes, but manual diagnosis from X-ray images is time-consuming and requires expertise. This project explores whether a deep learning model can automatically classify dental images by disease type.

## Approach

I built an image classification model using a convolutional neural network. The workflow covered the full pipeline from raw images to a trained model.

- Image preprocessing: resizing, normalization, and augmentation
- Model architecture: CNN with multiple convolutional and pooling layers
- Training with TensorFlow, using categorical cross-entropy loss
- Evaluation on a held-out test set measuring accuracy and confusion matrix

## What I Learned

Working with medical images taught me the importance of careful preprocessing and data augmentation when training data is limited. I also learned how to interpret a confusion matrix to understand where the model struggles — an important skill for any real-world classification problem.
