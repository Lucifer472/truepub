import ClientWrapper from "@/components/wrappers/client-wrapper";
import BottomArrow from "@/components/bottom-arrow";
import UpArrow from "@/components/up-arrow";

const BasicWrapper = ({
  children,
  isUp,
  isDown,
}: {
  children: React.ReactNode;
  isUp?: boolean;
  isDown?: boolean;
}) => {
  return (
    <section className="w-full h-full section">
      {isUp && (
        <ClientWrapper>
          <UpArrow />
        </ClientWrapper>
      )}
      <div className="z-10 h-full overflow-hidden relative transition-all">
        {children}
      </div>
      {isDown && (
        <ClientWrapper>
          <BottomArrow />
        </ClientWrapper>
      )}
    </section>
  );
};

export default BasicWrapper;
