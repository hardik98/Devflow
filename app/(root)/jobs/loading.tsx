const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-xl font-semibold">Loading Jobs...</h2>
      <p className="text-gray-500">Please wait while we fetch job listings.</p>
    </div>
  );
};

export default Loading;
