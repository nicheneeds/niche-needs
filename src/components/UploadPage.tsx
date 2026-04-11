import { Upload } from "./Upload";
import { Footer } from "./Footer";
import { SEO } from "./SEO";

export function UploadPage() {
    return (
        <>
            <SEO title="Project Upload - NicheNeeds" />
            <main>
                <Upload />
            </main>
            <Footer />
        </>
    );
}
