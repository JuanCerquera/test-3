import { PrimaryButton } from "/src/app/components/custom/misc/Buttons";

import Card from "/src/app/components/custom/cards/Card";

export function FormSection({
  children,
  title = null,
  columns = 2,
  gapX = 5,
  gapY = 1,
}) {
  return (
    <Card className="mb-8">
      {title && (
        <h2 className="text-lg md:text-sm font-medium mb-2">{title}</h2>
      )}
      <div
        className={`grid grid-cols-1 md:grid-cols-${columns} gap-x-${gapX} gap-y-${gapY} m-2`}
      >
        {children}
      </div>
    </Card>
  );
}

export function FormSubmitButton({ children = "Guardar", className, color }) {
  return (
    <div className={className + " flex justify-center"}>
      <PrimaryButton type="submit" color={color}>
        {children}
      </PrimaryButton>
    </div>
  );
}
