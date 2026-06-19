import Link from "next/link";
import { UploadCloud, MessageSquareHeart, ShoppingBag } from "lucide-react";

export function QuickActions() {
  const actions = [
    {
      id: "upload",
      title: "העלאת חומר",
      description: "שתף את הסיכומים שלך, עזור לחברים ואולי אפילו תרוויח על זה.",
      icon: <UploadCloud className="w-10 h-10 text-white" />,
      href: "/upload",
      color: "from-blue-500 to-blue-600",
      shadow: "shadow-blue-500/20",
    },
    {
      id: "requests",
      title: "בקשות חומרים",
      description: "חסר לך סיכום? פרסם בקשה והקהילה תדאג לך.",
      icon: <MessageSquareHeart className="w-10 h-10 text-white" />,
      href: "/requests",
      color: "from-rose-500 to-rose-600",
      shadow: "shadow-rose-500/20",
    },
    {
      id: "marketplace",
      title: "שוק המסכמים",
      description: "קנה ומכור חומרי לימוד פרימיום ישירות מסטודנטים מצטיינים.",
      icon: <ShoppingBag className="w-10 h-10 text-white" />,
      href: "/marketplace",
      color: "from-[#C9A94E] to-yellow-500",
      shadow: "shadow-yellow-500/20",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <h2 className="text-3xl font-black text-slate-900 mb-8">פעולות מהירות</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {actions.map((action) => (
          <Link key={action.id} href={action.href}>
            <div className={`group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-xl ${action.shadow} hover:scale-[1.02] transition-all duration-300 overflow-hidden`}>
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${action.color} rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity`} />
              
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${action.color} flex items-center justify-center mb-6 shadow-lg`}>
                {action.icon}
              </div>
              
              <h3 className="text-2xl font-black text-slate-900 mb-3">{action.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">{action.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
