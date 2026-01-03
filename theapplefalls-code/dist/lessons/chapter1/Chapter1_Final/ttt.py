
import glob
import os

# Name of the output file
output_filename = "all_combined.txt"

# Get a list of all txt files in the current directory
txt_files = glob.glob("*.html")

print(f"Found {len(txt_files)} text files. Combining...")

with open(output_filename, "w", encoding="utf-8") as outfile:
    for filename in txt_files:
        # Skip the output file itself if it already exists
        if filename == output_filename:
            continue
            
        try:
            with open(filename, "r", encoding="utf-8") as infile:
                # Write the content of the file
                outfile.write(infile.read())
                # Add a newline between files to prevent text running together
                outfile.write("\n") 
        except Exception as e:
            print(f"Could not read {filename}: {e}")

print(f"Done! All content saved to '{output_filename}'")