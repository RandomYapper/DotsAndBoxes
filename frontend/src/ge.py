import random
import math
import matplotlib.pyplot as plt
import numpy as np

class Assignment:
    def __init__(self, gamma=2, n=100):
        self.gamma = gamma
        self.n = n
        self.samples = []
        self.populationMean = 1 / gamma

    def generate(self):
        self.samples = []
        for i in range(self.n):
            u = random.uniform(0, 1)
            x = - (1 / self.gamma) * math.log(1 - u)
            self.samples.append(x)

    def sampleMean(self):
        return sum(self.samples) / self.n
    
    def getMarginalProb(self, bins=10):
        counts, edges = np.histogram(self.samples, bins=bins)
        probs = counts / len(self.samples)
        return probs

def calcCorrelation(samples1, samples2):
    n = len(samples1)
    meanX = sum(samples1) / n
    meanY = sum(samples2) / n
    
    cov = 0
    stdX = 0
    stdY = 0
    for i in range(n):
        cov += (samples1[i] - meanX) * (samples2[i] - meanY)
        stdX += (samples1[i] - meanX) ** 2
        stdY += (samples2[i] - meanY) ** 2
    cov /= n        
    stdX = math.sqrt(stdX / n)
    stdY = math.sqrt(stdY / n)
    if stdX == 0 or stdY == 0:
        return 0
    return cov / (stdX * stdY)

def getJointProb(samples1, samples2, bins=10):
    counts, xedges, yedges = np.histogram2d(samples1, samples2, bins=bins)
    jointProbs = counts / len(samples1)
    return jointProbs

def compareProbs(jointProbs, marginal1, marginal2):
    product_probs = np.outer(marginal1, marginal2)
    difference = np.abs(jointProbs - product_probs)
    return difference, product_probs

x1 = Assignment(n=100)
x2 = Assignment(n=100)
x1.generate()
x2.generate()

print("Population mean theoretically:", x1.populationMean)
print("Sample mean for X1:", x1.sampleMean())
print("Sample mean for X2:", x2.sampleMean())
correlation = calcCorrelation(x1.samples, x2.samples)
print("Correlation between X1 and X2:", round(correlation, 4))

# plot histograms for marginal distributions of X1 and X2
plt.figure(figsize=(12, 5))

# histogram for X1
plt.subplot(1, 2, 1)
plt.hist(x1.samples, bins=10, color='blue', edgecolor='black')
plt.title("Marginal Distribution of X1")
plt.xlabel("Value")
plt.ylabel("Frequency")

# histogram for X2
plt.subplot(1, 2, 2)
plt.hist(x2.samples, bins=10, color='green', edgecolor='black')
plt.title("Marginal Distribution of X2")
plt.xlabel("Value")
plt.ylabel("Frequency")

plt.savefig("histograms.png")
plt.close()

# Scatter plot between x1 and x2
plt.figure(figsize=(6, 5))
plt.scatter(x1.samples, x2.samples)
plt.title("Joint Distribution: Scatter Plot of X1 vs X2")
plt.xlabel("X1")
plt.ylabel("X2")
plt.savefig("scatter.png")
plt.close()

# calculations for checking independence 
marginal1 = x1.getMarginalProb()
marginal2 = x2.getMarginalProb()
jointProbs = getJointProb(x1.samples, x2.samples)
difference, product_probs = compareProbs(jointProbs, marginal1, marginal2)

# Print marginal, joint, product, and diff for some bins
for i in range(10):
    for j in range(10):
        joint_val = round(jointProbs[i][j], 4)
        prod_val = round(product_probs[i][j], 4)
        diff_val = round(difference[i][j], 4)
        print(f"Bin ({i},{j}): Diff={diff_val}")