import testimonials from './testimonials.json';

export const fetchTestimonials = async () => {
    try {
        return testimonials;  
    } catch (error) {
        console.error("Error fetching testimonials:", error);
        return [];
    }
};