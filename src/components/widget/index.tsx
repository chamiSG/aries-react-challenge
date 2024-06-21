import Card from "@/components/card";

const Widget = (props: {
  icon: JSX.Element;
  variant: string
  title: string;
  subtitle: string;
}) => {
  const { icon, title, subtitle, variant } = props;

  const getIconColor = (variant: string) => {
    if (variant === 'primary') {
      return 'text-brand-500'
    } else if (variant === 'danger') {
      return 'text-red-500'
    }else{
      return 'text-brand-500'
    }
  }

  return (
    <Card extra="!flex-row flex-grow items-center rounded-[20px]">
      <div className="flex h-50 w-auto flex-row items-center py-3">
        <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
          <span className={`flex items-center ${getIconColor(variant)}`}>
            {icon}
          </span>
        </div>
      </div>

      <div className="h-50 ml-4 flex w-auto flex-col justify-start py-3">
        <p className="font-dm text-xs font-medium text-gray-700 text-start">{title}</p>
        <h4 className="text-xl md:text-3xl font-bold text-navy-700 dark:text-white">
          {subtitle}
        </h4>
      </div>
    </Card>
  );
};

export default Widget;
