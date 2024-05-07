import Sidebar from "@/components/navigation/sidebar";

const InternalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full lg:grid lg:grid-cols-3 bg-white">
      <div className="col-span-1 hidden lg:flex w-full bg-gradient-to-r from-primary-1 to-primary-2">
        <Sidebar />
      </div>
      <section className="col-span-2 h-full w-full pt-24 pb-8 lg:pr-32 overflow-y-scroll">
        {children}
      </section>
    </div>
  );
};

export default InternalLayout;
