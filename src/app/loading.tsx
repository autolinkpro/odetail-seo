const LoadingSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-center mt-4 w-full">
      {/* Skeleton for Year Select */}
      <div className="w-56 h-12 bg-gray-300 rounded-lg animate-pulse"></div>

      {/* Skeleton for Make Select */}
      <div className="w-56 h-12 bg-gray-300 rounded-lg animate-pulse"></div>

      {/* Skeleton for Model Select */}
      <div className="w-56 h-12 bg-gray-300 rounded-lg animate-pulse"></div>
    </div>
  );
};

export default LoadingSkeleton;
