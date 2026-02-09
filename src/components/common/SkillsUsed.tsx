import { SiAdobephotoshop, SiAdobeillustrator, SiAdobeindesign } from "react-icons/si";

type AllowedSkills = "Illustrator" | "Photoshop" | "InDesign";

interface SkillsUsedProps {
  skills: AllowedSkills[];
}


const SkillsUsed = ({ skills }: SkillsUsedProps) => {
  return (
    <div className="min-w-2xl flex items-center gap-1 text-gray-800">
        {skills.includes("Photoshop") && <SiAdobephotoshop size={24} />}
        {skills.includes("Illustrator") && <SiAdobeillustrator size={24} />}
        {skills.includes("InDesign") && <SiAdobeindesign size={24} />}
    </div>
  )
}

export default SkillsUsed