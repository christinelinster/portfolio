import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import "../styles/Home.css"

function Home() {
  const tags = [
    { label: "partner lead", href: "#oracle" },
    { label: "product manager", href: "#product" },
    { label: "project manager", href: "#project" },
    { label: "software engineer", href: "#engineer" },
  ];
  return (
    <div id="home">
      {/* Some robot animation thing?  */}
      {/* Tags for roles that link to job description*/}

      <h1>hi, i&apos;m christine</h1>
      {tags.map((tag) => (
        <Chip
          key={tag.label}
          label={tag.label}
          href={tag.href}
          component="a"
          variant="outlined"
          clickable
          sx={{
            mr: 1,
            my: 1,
            padding: "2px 5px",
            borderRadius: "15px",
            color: "#9290C3",
            border: " 1.5px #605EA1 solid",
          }}
        />
      ))}

      <p>
        Nice to meet you! Explore my projects, learn about my journey, and get
        in touch to collaborate.
      </p>

      <Button
        variant="contained"
        color="inherit"
        href="/projects"
        sx={{
          backgroundColor: "#605EA1",
          fontWeight: "500",
          "&:hover": { backgroundColor: "#9290C3" },
        }}
      >
        View Projects
      </Button>
    </div>
  );
}

export default Home;
