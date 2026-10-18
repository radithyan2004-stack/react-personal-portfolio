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
                    <p>Higher Secondary (2020-2022)</p>
                  </File>
                </Folder>
                 {/* <Folder element="Barpeta Govt. HS School" value="BHS">
                   <File value="BHS-Matric">
                    <p>Matriculation (2016)</p>
                  </File>                   
                </Folder> */}
              </Folder>
                <Folder element="My Certifications" value="Certifications">
                  <Folder element="LinkedIn" value="LinkedIn">
                    <File value="LinkedIn-Intro">
                      <p>What is Gen AI?</p>
                    </File>
                    <File value="LinkedIn-PM">
                      <p>Project Management Foundations</p>
                    </File>
                  </Folder>
                  <Folder element="Cisco" value="Cisco">
                    <File value="Cisco-Python">
                      <p>Networking Foundations & Fundamentals</p>
                    </File>
                  </Folder>
                  <Folder element="Google" value="Google">
                    <File value="Google-Cloud">
                      <p>Data Warehouse & Big Query</p>
                    </File> 
                  </Folder>
                </Folder>
            </Tree>
          </div>
        </div>
      </div>
    </section>
  );
}
