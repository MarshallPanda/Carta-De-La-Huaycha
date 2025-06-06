<script>
  document.addEventListener("DOMContentLoaded", () => {
    // Mostrar todo al inicio
    filterMenu("All");

    document.querySelectorAll(".nav-pills li a").forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        document.querySelectorAll(".nav-pills li").forEach(li => li.classList.remove("active"));
        link.parentElement.classList.add("active");

        const category = link.getAttribute("href").substring(1); // sin #
        filterMenu(category === "All" ? "All" : category);
      });
    });
  });

  function filterMenu(category) {
    const items = document.querySelectorAll(".menu-item");
    items.forEach(item => {
      const itemCategory = item.getAttribute("data-category");
      if (category === "All" || itemCategory === category) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }
</script>
