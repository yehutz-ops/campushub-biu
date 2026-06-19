"use server";

export async function fetchHomeData() {
  // Mock implementations for dropdown options
  // REAL IMPLEMENTATION: Query the DB for distinct values
  return {
    departments: [
      { id: "cs", label: "מדעי המחשב" },
      { id: "economics", label: "כלכלה" },
      { id: "psychology", label: "פסיכולוגיה" },
      { id: "law", label: "משפטים" },
      { id: "engineering", label: "הנדסה" },
      { id: "business", label: "מנהל עסקים" },
    ],
    degrees: [
      { id: "Bachelors", label: "תואר ראשון" },
      { id: "Masters", label: "תואר שני" },
      { id: "PhD", label: "תואר שלישי" },
    ],
    courses: [
      { id: "c-1", label: "אלגברה לינארית (89-112)" },
      { id: "c-2", label: "תורת המחירים א' (66-211)" },
      { id: "c-3", label: "מבוא לפסיכולוגיה (101-101)" },
      { id: "c-4", label: "מבוא למשפט ישראלי (99-100)" },
    ],
    lecturers: [
      { id: "l-1", label: "פרופ' דוד כהן" },
      { id: "l-2", label: "ד״ר רחל לוי" },
      { id: "l-3", label: "ד״ר אבי ישראלי" },
      { id: "l-4", label: "פרופ' שרה אברהם" },
    ],
    analytics: {
      totalMaterials: 14205,
      activeUsers: 8432,
      totalCourses: 1250,
      totalDownloads: 45890,
    }
  };
}

export async function fetchTopContributors() {
  // REAL IMPLEMENTATION: Aggregate materials by user, sort by downloads/rating
  return [
    {
      id: "u-1",
      username: "dan_s",
      name: "דן שחר",
      department: "מדעי המחשב",
      avatar: "https://i.pravatar.cc/150?u=dan_s",
      downloads: 1250,
      rating: 4.9,
    },
    {
      id: "u-2",
      username: "noa_b",
      name: "נועה בר",
      department: "כלכלה",
      avatar: "https://i.pravatar.cc/150?u=noa_b",
      downloads: 980,
      rating: 4.8,
    },
    {
      id: "u-3",
      username: "yossi_m",
      name: "יוסי מזרחי",
      department: "פסיכולוגיה",
      avatar: "https://i.pravatar.cc/150?u=yossi_m",
      downloads: 845,
      rating: 4.9,
    },
    {
      id: "u-4",
      username: "michal_k",
      name: "מיכל כהן",
      department: "משפטים",
      avatar: "https://i.pravatar.cc/150?u=michal_k",
      downloads: 720,
      rating: 4.7,
    },
    {
      id: "u-5",
      username: "omer_g",
      name: "עומר גולן",
      department: "הנדסה",
      avatar: "https://i.pravatar.cc/150?u=omer_g",
      downloads: 650,
      rating: 4.6,
    },
  ];
}
