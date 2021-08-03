## Bearing classification challenge on Kaggle
Given a dataset contains signal recordings to detect defective bearings

### Context
This dataset is the output from the initial part of work focused on integration of AutoML solutions into the industrial companies by Quantum in collaboration with National Technical University «Kharkiv Polytechnic Institute». Using special device we take signals from the bearings inside with the goal to understand is the current bearing whole or defective. As the result, this dataset contains two files:

 - bearing_signals.csv. Contains signals recordings.
 - bearing_classes.csv. Classes whole or defective for every bearing.
### Content
https://i.postimg.cc/gkgJGTnj/1.jpg
For the experiments device shown on the picture was constructed. Two bearings were installed on the shaft. The rotation speed changed from 0 to 1500 rpm, was held for 10 seconds, and decreased to 250 rpm. The shaft was rotated using an DC motor connected to the shaft through a coupling. A radial load of 3.5 kg is applied to the shaft using a balanced weight.
The bearings were mounted on the shaft as shown in Figure 1. GY-61 ADXL3353 accelerometers were mounted on the bearing housing The sensor location is also shown in Figure. The recording was saved along the x, y, z axes.


### Credits
* Anne Jungers (@Annejungers)
* Hoang Minh (@Minh6019)
* Minh Hien (@minhhienvo368)
* Quinten (@QuintenMM)

### Method
Below are provided the steps that were followed for this project. Each step and classifiers have their own document.
 1. Data visualization: data analysis to understand missing values, data relations and usefulness of features
 2. Preprocessing: with the knowledge acquired with the preceding step, apply preprocessing of data including dealing with missing values, drop unuseful features and build new features
    - Option 1: 
         - Feature selection: 5 new representative features (i.e. min, max, median) derived from the orginal features (timestamp, a1_x, a2_x, a1_y, a2_y, a1_z, a2_z, hz, w)
         - In each feature, we made new features with min, max, mean, std and median. At the end, we have 45 features.  
         - Target: status of bearings
  
    - Option 2: 
         - Feature selection: 12 representative features (i.e. min, max, median, std, entropy, impulse factor, margin factor, frequency center, mean_square_frequency, root_mean_square_frequency, root_variance_frequency,crest_factor) derived from the orginal features (a1_y, a2_y,  hz: range of (24-25.5))
         - Target: status of bearings 
 3. Classifier: build classifiers based on the preprocessed data using a variety of techniques

### Classification techniques with the relative scores
- Option 1: 
  | Classifier	Test     | Parameter  | F1-score  | CV_ROC_AUC_score|
  |---------------------|------------|------------|---------|
  |KNN	|k=5	| 0.95 	| 0.94	|
  |KNN with validation|	k=5	|0.95 |0.94 |
  |KNN wuth GridSearchCV	| k=1	|0.95	|0.98 |
  |Random Forest with GridSearchCV	| k=100,200	| 0.95	|1.0 |
  
#### Conclusion:
With the model Random Forest, GridSearchCV is the highest score. 
  - Option 1: 
  | Classifier	Test     | Parameter  | F1-score  | CV_ROC_AUC_score|
  |---------------------|------------|------------|---------|
  |KNN	|k=5	| 0.95 	| 0.94	|
  |KNN with validation|	k=5	|0.95 |0.94 |
  |KNN wuth GridSearchCV	| k=1	|0.95	|0.98 |
  |Random Forest with GridSearchCV	| k=100,200	| 0.95	|1.0 |
  - Option 2: 
  | Classifier	Test     | Parameter  | F1-score  | CV_ROC_AUC_score|
  |---------------------|------------|------------|---------|
  |KNN	|k=5	| 0.81 	| 0.56	|
  |KNN with validation|	k=5	|0.81 |0.56 |
  |KNN wuth GridSearchCV	| k=1	|0.91	|0.87 |
  |Random Forest with GridSearchCV	| k=100,200	| 0.85	|0.94|
 
 #### Conclusion:
With the model Random Forest, GridSearchCV is the highest score. 
  

### Folder structures
* \ contains all of the jupyter's notebooks including classifiers, preprocessing and data visualization
* \Data contains the project dataset given in the Kaggle challenge
* \Data\outputs contains the outputs given by the classifiers that were submitted to Kaggle
  | File                     | Description                                                                 |
  |--------------------------|-----------------------------------------------------------------------------|
  | final_df.csv             | Final csv file, cleaned and ready for machine learning. |
  | 1.challenge-classification_01.ipynb   | Python code written in "Jupyter Notebook"  <br>Code used to get the data ready for Machine Learning.  |
  | 2.challenge-classification2.ipynb | Python code written in "Jupyter Notebook" <br>More in depth version. <br>|
  | 3.README.md           | Information on the assignment                   |  

### Installation instructions
1. Install Python and clone this repository
2. Install required Python modules with pip install -r requirements.txt
to run the jupyter's notebooks just go with jupyter notebook
