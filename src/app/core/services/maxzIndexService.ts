// zIndexService.ts

const getMaxZIndex = (): number => {
  const elements = document.getElementsByTagName('*');
  let maxZ = 0;

  for (let i = 0; i < elements.length; i++) {
    const zIndex = window.getComputedStyle(elements[i]).zIndex;
    if (zIndex !== 'auto') {
      const zIndexNumber = parseInt(zIndex, 10);
      if (!isNaN(zIndexNumber)) {
        maxZ = Math.max(maxZ, zIndexNumber);
      }
    }
  }
  return maxZ;
};
export default {
  getMaxZIndex
};
