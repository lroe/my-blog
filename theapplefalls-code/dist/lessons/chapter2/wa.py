
import os

output_file = "combined_html.txt"

with open(output_file, "w", encoding="utf-8") as outfile:
    for filename in sorted(os.listdir(".")):
        if filename.endswith(".html") and os.path.isfile(filename):
            outfile.write(f"\n\n===== START OF {filename} =====\n\n")
            
            with open(filename, "r", encoding="utf-8", errors="ignore") as infile:
                outfile.write(infile.read())
            
            outfile.write(f"\n\n===== END OF {filename} =====\n")

print(f"All HTML files combined into {output_file}")
