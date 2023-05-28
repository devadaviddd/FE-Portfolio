import { Stack, Alert, Collapse } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  open: boolean;
  severity: "success" | "info" | "warning" | "error";
  message: string;
};

export const Toast = (props: Props) => {
  return (
    <Collapse in={props.open}>
      <AnimatePresence>
        {props.open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Stack
              spacing={2}
              sx={{
                width: "50%",
                position: "fixed",
                bottom: "5px",
                boxShadow: "0px 5px 5px 0px rgba(0,0,0,0.75)",
                borderRadius: "10px",
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
              }}
            >
              <Alert severity={props.severity}>{props.message}</Alert>
            </Stack>
          </motion.div>
        )}
      </AnimatePresence>
    </Collapse>
  );
};
