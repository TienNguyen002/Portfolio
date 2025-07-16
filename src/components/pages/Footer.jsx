import Socials from "../common/Socials";

export const Footer = () => {
  return (
    <footer className="py-5 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-col justify-between items-center">
      <Socials
        containerStyles="flex gap-6"
        iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent hover:bg-accent hover:text-primary hover:transition-all duration-500"
      />
      <p className="text-sm text-muted-foreground mt-5">
        Copyright &copy; {new Date().getFullYear()} Nguyễn Hoàng Nhật Tiến |
        Portfolio. All rights reserved.
      </p>
    </footer>
  );
};
