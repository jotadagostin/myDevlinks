interface LinkButtonProps {
  href: string;
  label: string;
}

export function LinkButton({ href, label }: LinkButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        block w-full rounded-lg px-4 py-3 text-center
        text-[16px] font-medium leading-6
        transition-colors duration-200
        text-[#ffffff] dark:text-[#ffffff]
        border border-[rgba(255,255,255,0.5)] dark:border-[rgba(255,255,255,0.5)]
        bg-[rgba(255,255,255,0.1)] dark:bg-[rgba(255,255,255,0.1)]
        hover:bg-[rgba(255,255,255,0.05)] dark:hover:bg-[rgba(255,255,255,0.05)]
 
        [html:not(.dark)_&]:text-[#000000]
        [html:not(.dark)_&]:border-[rgba(0,0,0,0.5)]
        [html:not(.dark)_&]:bg-[rgba(0,0,0,0.05)]
        [html:not(.dark)_&]:hover:bg-[rgba(0,0,0,0.02)]
      "
    >
      {label}
    </a>
  );
}
