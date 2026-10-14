
type EmptyStateProps = {
  message: string;
};

function EmptyState({ message }: EmptyStateProps) {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
}

export default EmptyState;
