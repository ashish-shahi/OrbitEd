// quiz.js
import { QUIZ_QUESTIONS } from './questions.js';

export function calculateResults(userAnswers, allCareers) {
  
  // 1. Initialize scores for all careers
  let scoredCareers = allCareers.map(career => ({
    ...career,
    score: 0,
    matchReasons: [],
    penaltyReasons: [] 
  }));

  // 2. Iterate through User Answers
  userAnswers.forEach(answer => {
    const questionConfig = QUIZ_QUESTIONS.find(q => q.id === answer.questionId);
    if (!questionConfig) return;

    // Iterate through selected options for this question
    answer.selectedOptions.forEach(selectedText => {
      const optionConfig = questionConfig.options.find(o => o.text === selectedText);
      if (!optionConfig) return;

      const weights = optionConfig.weights;

      // 3. Apply Scoring Logic to every career
      scoredCareers.forEach(career => {
        
        // A. CHECK DOMAIN (High Weight: +10)
        if (weights.domain && weights.domain.includes(career.domain)) {
          career.score += 10;
          if (!career.matchReasons.includes("Matches your preferred Industry")) {
            career.matchReasons.push("Matches your preferred Industry");
          }
        }

        // B. CHECK INTERESTS (Medium Weight: +5)
        if (weights.interests && career.match_profile.interests) {
          const matchingInterests = career.match_profile.interests.filter(i => weights.interests.includes(i));
          if (matchingInterests.length > 0) {
            career.score += (5 * matchingInterests.length);
            career.matchReasons.push(`Matches interests: ${matchingInterests.join(", ")}`);
          }
        }

        // C. CHECK PERSONALITY (Low Weight: +3)
        if (weights.personality && career.match_profile.personality) {
          const matchingPersonality = career.match_profile.personality.filter(p => weights.personality.includes(p));
          if (matchingPersonality.length > 0) {
            career.score += (3 * matchingPersonality.length);
          }
        }

        // D. CHECK WORK STYLE (Medium Weight: +5)
        if (weights.work_style && career.match_profile.work_style) {
          const matchingStyle = career.match_profile.work_style.filter(w => weights.work_style.includes(w));
          if (matchingStyle.length > 0) {
            career.score += (5 * matchingStyle.length);
          }
        }

        // E. CHECK EDUCATION LEVEL (Filter Weight: +15)
        if (weights.education_level) {
            const reqEdu = career.requirements.education_level; 
            if (weights.education_level.includes(reqEdu)) {
                career.score += 15;
            }
        }

        // F. CHECK TAGS (Contextual Weight: +5)
        if (weights.tags && career.content.tags) {
            const matchingTags = career.content.tags.filter(t => weights.tags.includes(t));
            if (matchingTags.length > 0) {
                career.score += (5 * matchingTags.length);
            }
        }

        // G. DEAL BREAKERS (Massive Penalty: -100)
        if (weights.deal_breaker_avoid) {
            const careerAttributes = [
                ...career.match_profile.interests, 
                ...career.content.tags.map(t => t.toLowerCase()), 
                career.domain.toLowerCase(),
                ...(career.match_profile.work_style || [])
            ];

            const hitDealBreaker = weights.deal_breaker_avoid.some(avoidKeyword => 
                careerAttributes.some(attr => attr.includes(avoidKeyword))
            );

            if (hitDealBreaker) {
                career.score -= 100;
                career.penaltyReasons.push("Contains a Deal Breaker");
            }
        }

      });
    });
  });

  // 4. Sort by Score (Descending), then Title (Alphabetical) to fix jitter
  scoredCareers.sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));

  // 5. Filter out negative scores (Deal Breakers)
  return scoredCareers.filter(c => c.score > 0);
}

export function getTopCareers(results, count = 10) {
    return results.slice(0, count);
}