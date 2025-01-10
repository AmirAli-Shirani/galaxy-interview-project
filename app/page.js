import Galaxy from "@/app/(components)/Galaxy";
import {GalaxyContextProvider} from "@/public/context/GalaxyContent";
import GuideModal from "@/app/(components)/GuideModal";

function MyApp() {
    return (
        <main className="z-50 w-screen flex justify-center items-center h-screen">
            <GalaxyContextProvider>
                <GuideModal/>
                <Galaxy height={700} width={700}/>
            </GalaxyContextProvider>
        </main>
    );
}

export default MyApp;
