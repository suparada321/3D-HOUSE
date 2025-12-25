export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-600"></div>
        <p className="mt-4 text-gray-600 font-medium">กำลังโหลดโมเดล 3D...</p>
      </div>
    </div>
  );
}
