interface PageTitleProps {
  title: string;
}

function PageTitle({title}: PageTitleProps) {
  return <h1 className="font-custom text-h1">{title.charAt(0).toUpperCase() + title.slice(1)}</h1>;
}

export default PageTitle;
