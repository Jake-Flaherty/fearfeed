export default function LandingPage() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/blood-splatter.png')" }}>
    <div className="absolute inset-0 bg-black opacity-90"></div>
    <div className="relative z-10">
      <h1 className="text-5xl font-bold text-red-600 mb-4 shadow-black">
        Welcome to the Fear Feed
      </h1>
      
    </div>
  </div>
  );
};


