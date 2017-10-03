from __future__ import print_function  # Only needed for Python 2
import json
import glob
import os

# Input Format:
# {"key":"value"}
# {"key":"value"}

#Output Format:
# [
# {"key":"value"}
# ,
# {"key":"value"}
# ]



# change these values
readFolder = '../src/data/new_files'
writeFolder = './new_folder'


def compileFolder(readFolder,writeFolder):
	createNewFolder(writeFolder)
	fileNames = getFileNames(readFolder)
	for fileName in fileNames:
			readFile = '%s/%s' % (readFolder,fileName)
			writeFile = '%s/%s' % (writeFolder,fileName)
			compileFile(readFile,writeFile)
	print(fileNames)


def compileFile(readfilename,writefilename):

	fileArray = readFile(readfilename)
	writeFile(writefilename,fileArray)


def readFile(readfilename):
	with open(readfilename, "r") as fd:
	    new_array = []
	    for line in fd:
	        line = line.strip()
	        new_array.append(line)
            print(line)
            print(line.strip())
	return new_array

def writeFile(writefilename,data):
	with open(writefilename, 'w') as outfile:
		print("[",file=outfile)
		i=0
		for log in data:
			i=i+1
			print(log,file=outfile)
			if i != len(data):
				print(",",file=outfile)
		print("]",file=outfile)

def createNewFolder(folderpath):
	if not os.path.exists(folderpath):
		os.makedirs(folderpath)

def getFileNames(path):
	text_files = [f for f in os.listdir(path) if f.endswith('.json')]
	return text_files


def test():
	print("moin")

compileFolder(readFolder,writeFolder)
