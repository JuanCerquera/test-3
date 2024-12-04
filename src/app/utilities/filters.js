export function toPhoneNumber(number) {
  return number.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
}

export function toCurrency(number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(number);
}

export function toDuration(duration) {
  const [hours, minutes] = duration.split(":").map((n) => parseInt(n));
  let result = "";
  if (hours > 0) {
    result += `${hours} hora${hours > 1 ? "s" : ""}`;
  }
  if (minutes > 0) {
    result += `${result ? " y " : ""}${minutes} minuto${minutes > 1 ? "s" : ""}`;
  }
  return result;
}

export function capitalize(word) {
  const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
  return capitalized;
}

export function formatCrumb(crumb) {
  const newCrumb = crumb.replace("-", " ")
  return capitalize(decodeURIComponent(newCrumb));
}

export function toDatetimeString(date, type,isString=false) {
  if (isString){
    date = new Date(date)
  }
  switch (type){
    case "full-date":
      return date.toLocaleTimeString("es", {weekday:"long", year: 'numeric',month: 'long',day: 'numeric',hour: '2-digit', minute: '2-digit', hour12:true})
    case "date":
      return date.toLocaleDateString("es", {weekday:"long", year: 'numeric',month: 'long',day: 'numeric'});
    case "short-date":
      return date.toLocaleDateString("es", {year: 'numeric',month: 'long',day: 'numeric'});
    case "time":
      return date.toLocaleTimeString("es", {hour: '2-digit', minute: '2-digit', hour12:true});
  }
}

export function to12hFormat(time24) {
  const [hours, minutes, seconds] = time24.split(":");
  let period = "am";
  let hour = parseInt(hours, 10);

  if (hour >= 12) {
    period = "pm";
    if (hour > 12) {
      hour -= 12;
    }
  } else if (hour === 0) {
    hour = 12;
  }

  return `${hour}:${minutes} ${period}`;
}
