import { getLegacyCartUrl, orderingConfig } from "@/data/site";

type OrderLinkProps = {
  item?: {
    legacyId: string;
    name: string;
    price: string;
  };
  label?: string;
  variant?: "primary" | "secondary" | "compact";
  className?: string;
};

const variantClasses = {
  primary: "button-primary",
  secondary: "button-secondary",
  compact: "button-compact",
};

export function OrderLink({
  item,
  label,
  variant = "secondary",
  className = "",
}: OrderLinkProps) {
  const href =
    orderingConfig.enabled && item
      ? getLegacyCartUrl(item.legacyId)
      : orderingConfig.externalOrderUrl;

  const text = label ?? (item ? "Bestellen" : "Zur Bestellung");
  const variantClass = variantClasses[variant];
  const legacyCartUrl = item ? getLegacyCartUrl(item.legacyId) : undefined;

  return (
    <a
      href={href}
      className={`${variantClass} ${className}`.trim()}
      data-order-provider={orderingConfig.provider}
      data-order-mode={orderingConfig.modes.join(",")}
      data-legacy-item-id={item?.legacyId}
      data-legacy-item-name={item?.name}
      data-legacy-item-price={item?.price}
      data-legacy-cart-url={legacyCartUrl}
    >
      {text}
    </a>
  );
}
