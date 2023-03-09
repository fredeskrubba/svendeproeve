import { create } from 'zustand'

export const useReviewStore = create((set) => ({
    
    postReview: async (endpoint,token, id, subject, comment, stars) => {
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              },
            body: JSON.stringify({
                event_id: id,
                subject: subject,
                comment: comment,
                num_stars: stars
            })
        })
      },
}))