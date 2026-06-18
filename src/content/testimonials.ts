// Testimonials collection
// Add a new entry to this array and it will appear on the homepage automatically.
// Sorted by `order` (ascending). Rating is 1–5.

export type Testimonial = {
  id: string;
  name: string;
  location?: string; // e.g. "Bethesda, MD"
  review: string;
  rating: 1 | 2 | 3 | 4 | 5;
  order: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    location: "Bethesda, MD",
    review:
      "My fridge stopped cooling on a Saturday morning and they were at my door by the afternoon. Honest pricing and fixed it on the first visit. Couldn't ask for better service.",
    rating: 5,
    order: 1,
  },
  {
    id: "2",
    name: "David Hernandez",
    location: "Silver Spring, MD",
    review:
      "Technician was professional, walked me through the issue with my washer, and gave me a fair quote up front. Repair was quick and the machine has worked perfectly since.",
    rating: 5,
    order: 2,
  },
  {
    id: "3",
    name: "Emily Carter",
    location: "Rockville, MD",
    review:
      "Called for an oven repair and they had it running again the same day. No hidden fees, no upsell — just great work. I'll definitely call them again.",
    rating: 5,
    order: 3,
  },
  {
    id: "4",
    name: "Michael Thompson",
    location: "Columbia, MD",
    review:
      "Got my dishwasher repaired after another company quoted me a replacement. Saved me hundreds. Super knowledgeable team — highly recommend.",
    rating: 5,
    order: 4,
  },
  {
    id: "5",
    name: "Jessica Nguyen",
    location: "Annapolis, MD",
    review:
      "Wine cooler was warming up and they diagnosed and fixed it in one trip. Clean, courteous, and on time. Five stars.",
    rating: 5,
    order: 5,
  },
  {
    id: "6",
    name: "Robert Patel",
    location: "Frederick, MD",
    review:
      "Dryer wasn't heating and they came out the next morning. Friendly tech, fair price, no surprises. This is my go-to appliance repair company now.",
    rating: 5,
    order: 6,
  },
];
