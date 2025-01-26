export const scrollToDiv = (id: string) => {
    const element = document.getElementById(id);
    console.log(element)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };