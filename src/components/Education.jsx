import React from 'react';
import { File, Folder, Tree } from "@/components/ui/file-tree";
import { Highlighter } from "@/components/ui/highlighter";

export default function Education() {
  return (
    <section id="education" className="w-full bg-white text-black pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="inline-block mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-pixel">
              <Highlighter action="underline" color="#FFD700">
                Qualifications
              </Highlighter>
            </h2>
          </div>
          <div className="relative flex max-w-lg mx-auto flex-col items-center justify-center overflow-hidden rounded-lg border bg-background p-4">
            <Tree
              className="w-full bg-background overflow-hidden rounded-md"
              initialExpandedItems={["Education", "KU", "MC", "BA", "BHS", "Certifications"]}
            >
              <Folder element="My Education" value="Education">
                <Folder element="SMEC Technology" value="KU">
                  <File value="KU-MCA">
                    <p>Masters In Advanced AI and BigData Analytics with Gen AI (2026 – 2027)</p>
                  </File>
                </Folder>
                <Folder element="SAS SNDP YOGAM COLLEGE" value="MC">
                  <File value="MC-BCA">
                    <p>Bachelor of Computer Application (2023 – 2026)</p>
                  </File>
                </Folder>
                <Folder element="SVGV HIGHER SECONDARY" value="BA">
                  <File value="BA-HS">
                    <p>Higher Secondary (2021)</p>
                  </File>
                </Folder>
                 {/* <Folder element="Barpeta Govt. HS School" value="BHS">
                   <File value="BHS-Matric">
                    <p>Matriculation (2016)</p>
                  </File>                   
                </Folder> */}
              </Folder>
                <Folder element="My Certifications" value="Certifications">
                  {/* <Folder element="Cisco" value="Cisco">
                    <File value="Cisco-Intro">
                      <p>Introduction to Cybersecurity</p>
                    </File>
                    <File value="Cisco-Jr">
                      <p>Jr. Cybersecurity Analyst</p>
                    </File>
                  </Folder>
                  <Folder element="IBM" value="IBM">
                    <File value="IBM-Python">
                      <p>Python 101 for Data Science</p>
                    </File>
                  </Folder>
                  <Folder element="AWS" value="AWS">
                    <File value="AWS-Cloud">
                      <p>Cloud Foundations (AWS Academy Graduate)</p>
                    </File> */}
                  {/* </Folder> */}
                </Folder>
            </Tree>
          </div>
        </div>
      </div>
    </section>
  );
}