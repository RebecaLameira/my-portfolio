const Temporary = () => {
  return (
    <div className="fixed bottom-0 flex h-20 w-screen flex-col items-center justify-center gap-2 bg-white p-4 dark:bg-black">
      <h1 className="font-bold">Em breve novos projetos...</h1>
      <div className="flex items-center justify-center space-x-2 bg-white dark:invert">
        <div className="h-5 w-5 animate-pulse rounded-full bg-gray-400 [animation-delay:-0.4s]"></div>
        <div className="h-5 w-5 animate-pulse rounded-full bg-gray-400 [animation-delay:-0.20s]"></div>
        <div className="h-5 w-5 animate-pulse rounded-full bg-gray-400"></div>
      </div>
    </div>
  );
};

export default Temporary;
