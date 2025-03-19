import Image from "next/image";

export interface SkillType {
  id: number;
  url: string;
  title: string;
}

export const Skill = ({ skill }: { skill: SkillType }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 w-32 h-32 border border-gray-500 rounded-lg">
      <Image
        className="w-16 h-16 object-cover"
        src={skill.url}
        alt={skill.title}
        width={200}
        height={200}
      />
      <div className="flex items-center justify-center">
        <p className="text-xl font-bold">{skill.title}</p>
      </div>
    </div>
  );
};
