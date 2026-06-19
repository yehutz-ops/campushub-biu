import { ContributorCard } from "./ContributorCard";

interface CommunitySectionProps {
  contributors: any[];
}

export function CommunitySection({ contributors }: CommunitySectionProps) {
  return (
    <section className="bg-white border-t border-slate-100 py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col mb-10">
          <h2 className="text-3xl font-black text-slate-900 mb-3">תותחי הקמפוס</h2>
          <p className="text-slate-500 font-medium text-[15px] max-w-2xl">
            הסטודנטים שתורמים הכי הרבה ידע ומרוויחים הכי הרבה קרדיט. 
            הצטרף אליהם ושתף את הסיכומים שלך עם כולם!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {contributors.map((contributor, index) => (
            <ContributorCard 
              key={contributor.id} 
              contributor={contributor} 
              rank={index + 1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
