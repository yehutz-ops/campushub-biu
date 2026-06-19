import { fetchOpenRequests } from "@/actions/requests";
import { RequestCard } from "@/components/requests/RequestCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Filter } from "lucide-react";

export const metadata = {
  title: "מרכז הבקשות | CampusHub",
  description: "Marketplace for Knowledge",
};

import { Navbar } from "@/components/layout/Navbar";

export default async function RequestsPage() {
  // Fetch active requests from our Server Action
  const requests = await fetchOpenRequests();

  return (
    <div className="flex min-h-screen flex-col bg-slate-50/50" dir="rtl">
      <Navbar />
      {/* Hero Section */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl mb-4">
              מרכז הבקשות
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              ברוכים הבאים לזירת הידע של הקמפוס. חסר לכם סיכום? צריכים עזרה לקראת המבחן? פרסמו בקשה, או עיזרו לאחרים והציעו את שירותיכם.
            </p>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Action Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold h-12 px-6 rounded-full shadow-md shadow-blue-600/20 transition-all hover:shadow-lg hover:-translate-y-0.5">
            <Plus className="w-5 h-5 ml-2" />
            בקשה חדשה
          </Button>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-grow sm:min-w-[300px]">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input 
                placeholder="חפש בקשות, קורסים, נושאים..." 
                className="w-full h-12 pr-12 rounded-full border-slate-200 bg-white shadow-sm focus-visible:ring-blue-500 text-base"
              />
            </div>
            <Button variant="outline" className="h-12 w-12 rounded-full p-0 border-slate-200 bg-white shrink-0 shadow-sm text-slate-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50">
              <Filter className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Requests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {requests.map((request) => (
            <RequestCard
              key={request.id}
              id={request.id}
              title={request.title}
              description={request.description}
              status={request.status as any}
              deadline={request.deadline!}
              proposalCount={request.proposalCount}
              course={{ name: request.course.name }}
              user={{ name: request.user.name, avatar: request.user.avatar }}
            />
          ))}
          {requests.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-100 mb-6">
                <Search className="w-10 h-10 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">לא נמצאו בקשות פתוחות</h3>
              <p className="text-slate-500 max-w-sm mx-auto">
                אין כרגע בקשות פתוחות. אתם מוזמנים להיות הראשונים ולפתוח בקשה חדשה!
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
