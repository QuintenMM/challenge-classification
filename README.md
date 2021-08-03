## Bearing classification challenge on Kaggle
Given a dataset contains signal recordings to detect defective bearings

### Context
This dataset is the output from the initial part of work focused on integration of AutoML solutions into the industrial companies by Quantum in collaboration with National Technical University «Kharkiv Polytechnic Institute». Using special device we take signals from the bearings inside with the goal to understand is the current bearing whole or defective. As the result, this dataset contains two files:

 - bearing_signals.csv. Contains signals recordings.
 - bearing_classes.csv. Classes whole or defective for every bearing.
### Content
For the experiments device shown on the picture was constructed. Two bearings were installed on the shaft. The rotation speed changed from 0 to 1500 rpm, was held for 10 seconds, and decreased to 250 rpm. The shaft was rotated using an DC motor connected to the shaft through a coupling. A radial load of 3.5 kg is applied to the shaft using a balanced weight.
The bearings were mounted on the shaft as shown in Figure 1. GY-61 ADXL3353 accelerometers were mounted on the bearing housing The sensor location is also shown in Figure. The recording was saved along the x, y, z axes.


### Credits
* Anna Jungers (@Annejungers)
* Hoang Minh (@Minh6019)
* Minh Hien (@minhhienvo368)
* Quinten (@QuintenMM)

### Method
Below are provided the steps that were followed for this project. Each step and classifiers have their own document.
 - 1. Data visualization: data analysis to understand missing values, data relations and usefulness of features
 - 2. Preprocessing: with the knowledge acquired with the preceding step, apply preprocessing of data including dealing with missing values, drop unuseful features and build new features
    - Option 1: 
         - Feature selection: 5 new representative features (i.e. min, max, median) derived from the orginal features (timestamp, a1_x, a2_x, a1_y, a2_y, a1_z, a2_z, hz, w)
         - Target: status of bearings
    - Option 2: 
         - Feature selection: 12 representative features (i.e. min, max, median) derived from the orginal features (a1_y, a2_y, hz: range of (22-25.5))
         - Target: status of bearings 
 - 3. Classifier: build classifiers based on the preprocessed data using a variety of techniques

### Classification techniques
Classification techniques together with the relative scores.
Classifier	Test set score	CV score	Kaggle score
KNN	-	-	-
Logistic Regression	-	0.82	0.78947
Neural Networks	-	-	-
Random Forest	0.82	0.84	0.79425
Support Vector Machines	0.85	0.84	0.80861
Perceptron	0.78	-	0.62679
Naive Bayes	0.78	0.80	0.76076

### Folder structures
* \ contains all of the jupyter's notebooks including classifiers, preprocessing and data visualization
* \Data contains the project dataset given in the Kaggle challenge
* \Data\outputs contains the outputs given by the classifiers that were submitted to Kaggle

### Installation instructions
1. Install Python and clone this repository
2. Install required Python modules with pip install -r requirements.txt
to run the jupyter's notebooks just go with jupyter notebook
