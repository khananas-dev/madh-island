import { DateRange, LocalizationProvider, DateRangePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import {
  CardHeader,
  Avatar,
  IconButton,
  Typography,
  Box,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import Card from "@mui/material/Card";
import { red } from "@mui/material/colors";
import React from "react";
import COLORS from "../../constants/color";

interface SummaryCard {
  price: number;
  handleClick:Function
}
function index(cardProps: SummaryCard) {
  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Card
        style={{
          padding: 16,
          borderRadius: 12,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {cardProps.price && (
          <div style={{ display: `flex`, alignItems: "baseline" }}>
            <Typography
              variant="h3"
              component="p"
              color="#1F1F1F"
              textAlign="left"
            >
              ₹ {cardProps.price.toLocaleString("en-IN")}
            </Typography>
            <Typography
              variant="h5"
              component="p"
              color={COLORS.shade2}
              textAlign="left"
              sx={{ marginLeft: `8px` }}
            >
              /night
            </Typography>
          </div>
        )}
        <Box sx={{ marginTop: 2 }}>
          <DateRangePicker
            startText="Check-in"
            endText="Check-out"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
              </React.Fragment>
            )}
          />
        </Box>

        <TextField
          sx={{ marginTop: 2 }}
          id="filled-basic"
          label="No. of Guests"
          variant="filled"
          placeholder="14"
        />
        <Button
        onClick={(ev: any) => cardProps.handleClick(ev)} 
         sx={{ marginTop: 3 }} size="large" variant="contained">
          Reserved
        </Button>
        <Typography
          variant="body2"
          component="p"
          color={COLORS.shade2}
          textAlign="center"
          sx={{ marginTop: `16px` }}
        >
          You wont be charged Yet
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="body2"
            component="span"
            color={COLORS.shade2}
            textAlign="left"
            sx={{ marginTop: `16px` }}
          >
            ₹ {cardProps.price.toLocaleString("en-IN")} x 5 nights
          </Typography>
          <Typography
            variant="body2"
            component="span"
            color={COLORS.shade2}
            textAlign="right"
            sx={{ marginTop: `16px` }}
          >
            50,000
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="body2"
            component="span"
            color={COLORS.shade2}
            textAlign="left"
            sx={{ marginTop: `16px` }}
          >
            Extra Guests 3 - 1,000/person
          </Typography>
          <Typography
            variant="body2"
            component="span"
            color={COLORS.shade2}
            textAlign="right"
            sx={{ marginTop: `16px` }}
          >
            50,000
          </Typography>
        </Box>
        <Box sx={{ display: "flex", marginBottom:2, justifyContent: "space-between" }}>
          <Typography
            variant="body2"
            component="span"
            color={COLORS.shade2}
            textAlign="left"
            sx={{ marginTop: `16px` }}
          >
            GST(18%)
          </Typography>
          <Typography
            variant="body2"
            component="span"
            color={COLORS.shade2}
            textAlign="right"
            sx={{ marginTop: `16px` }}
          >
            9,785
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ display: "flex", marginBottom:2, justifyContent: "space-between" }}>
          <Typography
            variant="h4"
            component="span"
            color={COLORS.black}
            textAlign="left"
            sx={{ marginTop: `16px` }}
          >
            Total
          </Typography>
          <Typography
            variant="h4"
            component="span"
            color={COLORS.black}
            textAlign="right"
            sx={{ marginTop: `16px` }}
          >
            60,785
          </Typography>
        </Box>
      </Card>
    </LocalizationProvider>
  );
}

export default index;
