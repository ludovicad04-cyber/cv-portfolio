// Add to your environment variables
VITE_SHOW_DETAILED_METRICS=false

// In your component
const showDetailedMetrics = import.meta.env.VITE_SHOW_DETAILED_METRICS === 'true';

// Conditional rendering
{showDetailedMetrics && (
  <div className="mt-4">
    <h4>Detailed Impact</h4>
    <ul>
      <li>Reduced costs by 90%</li>
      <li>Delivered 75% faster</li>
    </ul>
  </div>
)}