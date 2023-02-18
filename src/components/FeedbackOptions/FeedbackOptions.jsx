export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {Object.keys(options).map(name => (
        <li key={name}>
          <button type="button" onClick={() => onLeaveFeedback(name)}>
            {name[0].toUpperCase() + name.slice(1)}
          </button>
        </li>
      ))}
    </ul>
  );
};
