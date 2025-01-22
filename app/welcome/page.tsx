import Button from "@/components/Button";
import Link from "next/link";

export default function Welcome () {
    return (
        <div>
            <div>
                Welcome to the NextGen CMS  
            </div>
            
            <div>
                <Link href="/welcome/teacher"><Button label="teacher"/></Link>
                <Link href="welcome//student"><Button label="student"></Button></Link>
            </div>
        </div>
    )
}