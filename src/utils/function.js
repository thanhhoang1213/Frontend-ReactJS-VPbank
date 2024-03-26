export const getBlobImg = (file) =>
  new Promise((resolve, reject) => {
    try {
      if (!file) return;

      const reader = new FileReader();

      const objURL = URL.createObjectURL(file);

      reader.readAsDataURL(file);

      reader.onload = () => {
        resolve({
          url: objURL,
          id: file.lastModified,
        });
      };
    } catch (error) {
      reject(error);
    }
  });
