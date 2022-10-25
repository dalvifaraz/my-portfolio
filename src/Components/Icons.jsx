import {
  Facebook,
  GitHub,
  Google,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import { Box, Link } from "@mui/material";

export default function IconsComponent() {
    return (
        <>
            <Box paddingX={3} className="icon">
                <Link href="#">
                    <Instagram sx={{ fontSize: 30 }} />
                </Link>
            </Box>
            <Box paddingX={3} className="icon">
                <Link href="#">
                    <Facebook sx={{ fontSize: 30 }} />
                </Link>
            </Box>
            <Box paddingX={3} className="icon">
                <Link href="#">
                    <Twitter sx={{ fontSize: 30 }} />
                </Link>
            </Box>
            <Box paddingX={3} className="icon">
                <Link href="#">
                    <Google sx={{ fontSize: 30 }} />
                </Link>
            </Box>
            <Box paddingX={3} className="icon">
                <Link href="#">
                    <YouTube sx={{ fontSize: 30 }} />
                </Link>
            </Box>
            <Box paddingX={3} className="icon">
                <Link href="#">
                    <LinkedIn sx={{ fontSize: 30 }} />
                </Link>
            </Box>
            <Box paddingX={3} className="icon">
                <Link href="#">
                    <GitHub sx={{ fontSize: 30 }} />
                </Link>
            </Box>
        </>
    );
}
