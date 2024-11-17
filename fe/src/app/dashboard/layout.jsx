import Sidebar from "@/components/Siderbar";

const AppLayout = ({ analytics, menu, header }) => {
  return (
    <div className="flex gap-3 py-4 pe-4 bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="flex flex-col gap-3 flex-grow">
        {header}
        <div className="flex flex-grow gap-3 ">
          {analytics}
          {menu}
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
